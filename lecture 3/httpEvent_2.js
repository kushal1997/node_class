const http=require('http');

const server= http.createServer((req,res)=>{
    if(req.method == 'POST'){
        console.log(req.body)
        let body='';
        req.on('data',chunk=>{
            body+=chunk;
        })
        req.on('end',()=>{
            console.log(body);
            res.end('Data is received');
        })
    } else{
        console.log('function ends here');
        res.end('Welcome to Node JS')
    }
    
})

server.listen(3100)

console.log('Server is listening in 3100')