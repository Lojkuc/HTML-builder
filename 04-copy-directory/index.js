const fs = require('fs/promises');
const path = require('path');
const pathDirectoryOne = path.join(__dirname,"./files");
const pathDirectoryTwo = path.join(__dirname,"./files-copy");

(async () =>{
  try{
    await fs.mkdir(pathDirectoryTwo,{recursive:true});
    const files = await fs.readdir(path.join(pathDirectoryOne));
    const files2 = await fs.readdir(path.join(pathDirectoryTwo));
    if(files2.length >0){
      for(let file2 of files2){
        const pathTwo = path.join(pathDirectoryTwo, file2);
        await fs.unlink(pathTwo)
       }
    }
    for(let file of files){
     const pathOne = path.join(pathDirectoryOne, file);
     const pathTwo = path.join(pathDirectoryTwo, file);
     await fs.copyFile(pathOne,pathTwo)
    }
  }
  catch(error){
    console.log(error);
  }
})()