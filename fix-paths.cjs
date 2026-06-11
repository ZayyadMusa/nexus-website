const fs = require('fs');

const files = ['index.html', 'about.html', 'mission.html'];

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  // replace "./images/..." and "images/..." with "/images/..."
  content = content.replace(/\"\.\/images\//g, '"/images/');
  content = content.replace(/\"images\//g, '"/images/');
  fs.writeFileSync(f, content);
});
console.log('Fixed paths');
