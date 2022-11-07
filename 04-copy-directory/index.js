const fs = require('fs/promises');
const path = require('path');
const pathDirectoryOne = path.join(__dirname,"./files");
const pathDirectoryTwo = path.join(__dirname,"./files-copy");

(async () =>{
  try{
    await fs.mkdir(pathDirectoryTwo,{recursive:true});
    const files = await fs.readdir(path.join(pathDirectoryOne));
    for(let file of files){
     const pathOne = path.join(pathDirectoryOne, file);
     const pathTwo = path.join(pathDirectoryTwo, file);
     await fs.copyFile(pathOne,pathTwo)
    }
  }
  catch{
    console.log("Error");
  }
})()