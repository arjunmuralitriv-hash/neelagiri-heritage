const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const sourceDir = 'C:\\Users\\arjun\\Downloads\\Images for gallery';
const destDir = path.join('C:\\Users\\arjun\\Downloads\\Neelagiri\\website\\public\\images\\gallery');

async function processDirectory(dir, basePath = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const results = [];

  for (let entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      const subDirResults = await processDirectory(fullPath, path.join(basePath, entry.name));
      results.push(...subDirResults);
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.jfif'].includes(ext)) {
        const categoryName = basePath || 'Other';
        let categoryMap = {
          'Bell Desk': 'Hotel',
          'Board Room': 'Boardroom',
          'Business Suite': 'Rooms',
          'Our Heritage': 'Hotel',
          'Outdoors': 'Hotel', // or 'Outdoors' if we add it
          'Premium Suite': 'Rooms'
        };
        const mappedCategory = categoryMap[categoryName] || categoryName;
        
        // Dest path
        const destCategoryDir = path.join(destDir, mappedCategory.toLowerCase().replace(/\s+/g, '-'));
        if (!fs.existsSync(destCategoryDir)) {
          fs.mkdirSync(destCategoryDir, { recursive: true });
        }
        
        const fileNameWithoutExt = path.basename(entry.name, path.extname(entry.name));
        const finalFileName = `${categoryName.toLowerCase().replace(/\s+/g, '-')}-${fileNameWithoutExt.toLowerCase().replace(/\s+/g, '-')}.webp`;
        const destPath = path.join(destCategoryDir, finalFileName);
        
        console.log(`Converting ${fullPath} to ${destPath}`);
        try {
          await sharp(fullPath).webp({ quality: 80 }).toFile(destPath);
          results.push({
            src: `/images/gallery/${mappedCategory.toLowerCase().replace(/\s+/g, '-')}/${finalFileName}`,
            alt: `${categoryName} - ${fileNameWithoutExt}`,
            category: mappedCategory
          });
        } catch (e) {
          console.error(`Error processing ${fullPath}`, e);
        }
      } else {
        console.log(`Skipping non-image file: ${fullPath}`);
      }
    }
  }
  
  return results;
}

processDirectory(sourceDir).then(results => {
  console.log('RESULTS_START');
  console.log(JSON.stringify(results, null, 2));
  console.log('RESULTS_END');
});
