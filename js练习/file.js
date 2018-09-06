var fs=require('fs');
let dir=fs.existsSync('../img');
fs.rmdirSync('../img')
console.log(dir);