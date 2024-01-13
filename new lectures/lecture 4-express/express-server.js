const express = require('express')

const server = express();

// server.get('/',(req,res)=>{
//     res.send("Hello World")
// })

// server.get('/',
//     // 1st middlemare
//     // (req, res) => {
//     //     // res.send("This is the first response")
//     //     console.log("first resposne")
//     // },

//     (req, res,next) => {
//         // res.send("This is the first response")
//         console.log("first resposne")
//         next();
//     },

//     // 2nd middleware
//     (req, res) => {
//         res.send("Hello World")
//     }
// )

//another way to write the above middlewares

//order of writing code matters for middle_wares
// server.get('/',(req,res,next)=>{
//     console.log("first middleware");
//     next();
// })
// server.get('/',(req,res)=>{
//     res.send('Hello World');
// })

//another way to pass middlewares as a array

function firstMiddleware(req, res, next) {
    console.log("this is first one");
    next();
}

function secondMiddleware(req, res, next) {
    console.log("this is 2nd middleware")
    next();
}
//first way
// server.get('/',firstMiddleware,secondMiddleware,(req,res)=>{
//     res.send('Home Page')
// })

//second way
// server.get('/',[firstMiddleware,secondMiddleware],(req,res)=>{
//     res.send('Home Page')
// })

//if path is changed
// server.get('/send',[firstMiddleware,secondMiddleware],(req,res)=>{
//     res.send('Home Page')
// })

//independent middleware
function globalMiddleware(req, res, next) {
    console.log("this is global middleware");
    next();
}

//to run this function independently
// server.use(globalMiddleware);


// server.get('/send', [firstMiddleware, secondMiddleware], (req, res) => {

//     res.send('Home Page')
// })


// get request

server.get("/", (req, res) => {
    //how to add content type
    res.set('Content-Type', 'text/plain')
    res.send('This is express server');
})

// post request example

server.post('/', (req, res) => {
    // res.send("Post request received");

     //to add status code
     res.status(201).send("Post request received");
})

//put request

server.put('/', (req, res) => {
    res.send("Put request received");
})

//delete request

server.delete('/', (req, res) => {
    res.send("Delete request received");
})
server.listen(3100, () => {
    console.log("Server is running on port 3100");
})