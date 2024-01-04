const fs=require("fs");

console.log("Starting to read");

// const buffer =fs.readFileSync('data.txt')
// console.log(buffer)
// console.log(buffer.toString())

// const buffer =fs.readFileSync('data.txt',{encoding:'utf8'})
// console.log(buffer)

//creating and writing a file

// try{
//     fs.writeFileSync('newfile.txt','Hello World');
// }catch(err){
//     console.log(err);
// }

//add another data
// fs.appendFileSync('newfile.txt','\nI am appending some more text');

//deleting a file
// fs.unlinkSync('newfile.txt');


//Reading data using asynchrounous operation
// fs.readFile("data.txt",(err,data)=>{
//     if(err){
//         console.log(err)
//     } else{
//         console.log(data.toString());
//     }
// })

//write data using asynchrounous operation
// fs.writeFile('employee.txt','New Employee',(err)=>{
//     if(err) console.log(err);
//     else console.log("File is written");
// })

// update data using asynchrounous operation
// fs.appendFile('employee.txt','\nAnother Employee',(err)=>{
//     if(err) console.log(err)
//     else console.log("Data updated")
// })

// delete file using asynchrounous operation
// fs.unlink("employee.txt",err=>{
//     if(err) console.log(err)
//     else console.log("File Deleted")
// })

console.log("This is another operation being performed");