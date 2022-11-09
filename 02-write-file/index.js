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
rl.on('SIGINT', () => {
  console.log("\nBye human");
  rl.close()
});
rl.on('line', (input) => {
  if(input == "exit"){
    console.log("Bye human");
    rl.close()
  }
  else{
    rl.prompt();
    writeStream.write(`\n${input}`)
  }
});



