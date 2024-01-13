const express=require('express')
const ProductController =require('./src/controllers/products.controller')
const server=express();

//create an instance of product controller
const productController=new ProductController();

server.get('/',productController.getProducts)

server.get('/',(req,res)=>{
    return res.send("Welcome to inventory app")
})

server.listen(3100,()=>{
    console.log("Server is running on port 3100");
})