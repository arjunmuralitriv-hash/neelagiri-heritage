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
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        const destPath = fullPath.substring(0, fullPath.lastIndexOf('.')) + '.webp';
        console.log(`Converting ${fullPath} to ${destPath}`);
        try {
          await sharp(fullPath).webp({ quality: 80 }).toFile(destPath);
          fs.unlinkSync(fullPath); // Delete the original file
          console.log(`Deleted original ${fullPath}`);
        } catch (e) {
          console.error(`Error processing ${fullPath}`, e);
        }
      }
    }
  }
}

processDirectory(publicDir).then(() => {
  console.log('Finished converting all public images to webp.');
});
