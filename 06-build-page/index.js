const fs = require('fs');
const path = require('path');
const { readdir } = require('fs/promises');
const pathProject = path.join(__dirname,"./project-dist");
const pathTemplate = path.join(__dirname,"./template.html");
(async () => {
  try{
    await fsPromises.mkdir(pathProject,{recursive:true});
  }
  catch{
    console.log("error");
  }
})();