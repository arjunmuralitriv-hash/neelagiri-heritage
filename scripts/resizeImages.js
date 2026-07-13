const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicDir = 'C:\\Users\\arjun\\Downloads\\Neelagiri\\website\\public';

async function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (let entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      if (ext === '.webp') {
        try {
          const metadata = await sharp(fullPath).metadata();
          // Only resize if the image is wider than 1200px
          if (metadata.width > 1200) {
            console.log(`Resizing ${fullPath} (Width: ${metadata.width})`);
            const buffer = await sharp(fullPath)
              .resize({ width: 1200, withoutEnlargement: true })
              .webp({ quality: 75 })
              .toBuffer();
            
            fs.writeFileSync(fullPath, buffer);
            console.log(`Successfully resized ${fullPath}`);
          }
        } catch (e) {
          console.error(`Error processing ${fullPath}`, e);
        }
      }
    }
  }
}

processDirectory(publicDir).then(() => {
  console.log('Finished resizing all webp images.');
});
