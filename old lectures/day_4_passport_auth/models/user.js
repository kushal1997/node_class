const mongoose=require('mongoose')

const userShema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type: String,
        required:true,
    },
    name:{
        
        type:String,
        required:true,
    }
},{
    timestamps: true  //Saves createdAt and updatedAt as dates (default is
})

const Users=mongoose.model('Users',userShema)

module.exports=Users;