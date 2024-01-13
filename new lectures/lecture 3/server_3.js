
const http=require('http')
const port =3100;

const server=http.createServer((req,res)=>{
    res.write('This is comming from NODE JS server');
    console.log(req.url);

    if(req.url=='/first') return res.end("this is the first response")
    res.end("\nthis is the defult response")
    // res.end("Welcome to Node js");
})

server.listen(port,()=>{
    console.log(`Server is running at ${port}`)
})
