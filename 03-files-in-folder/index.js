const fs = require('fs/promises');
const path = require('path');
const pathFile = path.join(__dirname,"secret-folder");
(async () => {
  try{
    const files = await fs.readdir(path.join(pathFile), {
      withFileTypes: true
    });
    for(let file of files){
      if(file.isFile()){
        const extname = path.extname(file.name)
        const basename = path.basename((file.name).replace(extname,""))
        const fileSize = (await fs.stat(path.join(pathFile,file.name))).size
        console.log(`${basename} - ${extname.slice(1)} - ${fileSize/1024} Кб`);
      }
    }
  }
  catch{
    console.log("Error");
  }
})();








