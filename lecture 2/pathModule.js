const fs=require('fs');
const path=require('path');

// reading data
const filePath=path.join('home','memo.txt')
console.log(filePath)

const filePathResolved = path.resolve('home','memo.txt')
console.log(filePathResolved);

console.log(path.extname(filePathResolved))

fs.readFile(filePathResolved,(err,data)=>{
    if(err) console.log(err);
    else console.log(data.toString())
})