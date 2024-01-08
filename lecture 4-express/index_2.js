const express = require('express')

const server=express()

server.get('/',(req,res)=>{
   return res.send('Welcome to express js')
})

// static files are in public folder which can be accessed directly
server.use(express.static('public'))
server.listen(3100,()=>{
    console.log("Server is running on port 3100")
})