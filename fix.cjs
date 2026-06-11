const fs = require('fs');
['index.html', 'about.html', 'mission.html'].forEach(f => {
  fs.writeFileSync(f, fs.readFileSync(f, 'utf8').replace(/=\"\//g, '=\"./'));
});
