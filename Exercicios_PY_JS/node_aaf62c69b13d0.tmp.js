// const input = prompt("What's your name?");

// console.log(`Olá ${nome}, prazer em conhecer você!`)

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Who are you?', name => {
    console.log(`Hey there ${name}!`);
    readline.close();
  });