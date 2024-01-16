const express=require('express')

const router=express.Router();
const postsController=require('../controllers/posts_controller')

console.log("post router is loaded")

router.get('/posts',postsController.post)


module.exports=router;