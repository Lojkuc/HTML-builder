const fs = require('fs');
const path = require('path');
const pathFile = path.join(__dirname,"text.txt")
const writeStream = fs.createWriteStream(pathFile)
const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Введите что-нибудь..'
});
rl.prompt();
rl.on('line', (input) => {
  rl.prompt();
  if(input == "exit"){
    rl.close()
  }
  else{
    writeStream.write(`\n${input}`)
  }
});

