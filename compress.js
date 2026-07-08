const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const TARGET_WIDTH = 1920;
const QUALITY = 80;

async function processFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  
  if (!['.jpg', '.jpeg', '.png', '.jfif', '.webp'].includes(ext)) {
    return;
  }
  
  const stats = fs.statSync(filePath);
  // Only compress if > 1MB
  if (stats.size < 1000000) return;

  const tempPath = filePath + '.tmp';
  
  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();
    
    let processed = image;
    if (metadata.width > TARGET_WIDTH) {
      processed = processed.resize(TARGET_WIDTH);
    }
    
    if (ext === '.jpg' || ext === '.jpeg' || ext === '.jfif') {
      processed = processed.jpeg({ quality: QUALITY });
    } else if (ext === '.png') {
      processed = processed.png({ quality: QUALITY, compressionLevel: 8 });
    } else if (ext === '.webp') {
      processed = processed.webp({ quality: QUALITY });
    }
    
    await processed.toFile(tempPath);
    
    // Replace original
    fs.renameSync(tempPath, filePath);
    console.log(`Compressed: ${filePath} (from ${(stats.size/1024/1024).toFixed(2)}MB to ${(fs.statSync(filePath).size/1024/1024).toFixed(2)}MB)`);
  } catch (err) {
    console.error(`Failed to process ${filePath}:`, err);
    if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
  }
}

async function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else {
      await processFile(fullPath);
    }
  }
}

processDirectory('./public/images').then(() => {
  console.log('Compression complete.');
});
