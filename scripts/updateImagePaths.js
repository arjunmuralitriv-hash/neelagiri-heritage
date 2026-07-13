const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\arjun\\Downloads\\Neelagiri\\website\\src';

function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (let entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      processDirectory(fullPath);
    } else {
      if (fullPath.endsWith('.js') || fullPath.endsWith('.jsx')) {
        let content = fs.readFileSync(fullPath, 'utf8');
        let modified = false;
        
        // Regex to replace .jpg or .png inside strings that look like paths
        // specifically targeting '/images/...' and similar
        // Let's just do a simple replacement for .jpg and .png
        // But only if they are image paths.
        
        const newContent = content.replace(/\.(jpg|jpeg|png)/gi, '.webp');
        if (content !== newContent) {
          fs.writeFileSync(fullPath, newContent, 'utf8');
          console.log(`Updated paths in ${fullPath}`);
        }
      }
    }
  }
}

processDirectory(srcDir);
console.log('Finished updating image paths.');
