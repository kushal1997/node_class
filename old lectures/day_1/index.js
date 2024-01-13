const http=require("http");
const port=3100;
const fs =require('fs');
function requestHandler(req,res){
    console.log(req.url);
    res.writeHead(200,{'content-type':'text-html'})
    // res.end("<h1>Hello World</h1>")

    // fs.readFile('./index.html',(err,data)=>{
    //     if (err) {
    //         console.log("error",err);
    //         return;
    //     }
    //     return res.end(data);
    // })

    let filePath;
    switch(req.url){
        case '/':
            filePath='./index.html';
            break;
        case '/profile':
            filePath="./profile.html";
            break;
        default:
            filePath="./404.html";
            break;
    }

    fs.readFile(filePath,(err,data)=>{
        if(err){
            console.log("error",err);
            return;
        }
        return res.end(data);
    })
}
const server=http.createServer(requestHandler);

server.listen(port,(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("server is running in port no: ",port)
})