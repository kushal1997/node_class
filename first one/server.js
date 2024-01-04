const http = require("http");

const server= http.createServer((req,res)=>{
    console.log(req.url)
    res.write("Welcome to node js server")
    if(req.url=="/jobs") {
       return res.end("You are on job Portal bharati")
    
    }
    
})

server.listen(3100,()=>{
    console.log("Server is running at port 3100")
});