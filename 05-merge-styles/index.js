const fs = require('fs');
const path = require('path');
const { readdir } = require('fs/promises');
const pathStyles = path.join(__dirname,"styles");
const pathBundles = path.join(__dirname, 'project-dist', 'bundle.css');
(async () => {
  try {
    const bundleFile = fs.createWriteStream(pathBundles);
    const files = (await readdir(pathStyles, { withFileTypes: true }));

    for (const file of files) {
      const pathFile = path.join(pathStyles, file.name);
      if (file.isFile() && path.extname(pathFile) === '.css') {
        const styleReadStream = fs.createReadStream(pathFile, 'utf8');
        styleReadStream.pipe(bundleFile);
      }
    }
  } catch{
    console.log("Error");
  }
})();
