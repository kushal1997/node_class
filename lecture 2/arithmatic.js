function sum(x,y){
    return x+y;
}


//1 common js module

// module.exports={
//     add:sum,
// }

// module.exports.subtracts=(x,y)=>{
//     return x-y;
// }

// module.exports=function(x,y){
//     return x*y;
// }
console.log("Arithmatic is loading")


//2 Using ES6 module 
// for ES6 we need to change file extension then it will work {.js to .mjs}

export function div(x,y){
    return x/y;
}


