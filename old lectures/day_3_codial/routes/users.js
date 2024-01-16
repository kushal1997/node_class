const express=require('express')

const router=express.Router();
const userController=require('../controllers/user_controller')

console.log("user router loaded");
router.get('/profile',userController.profile)

router.get("/sign-up",userController.signup);
router.get("/sign-in",userController.signin);

router.post('/create',userController.create)
router.post('/create-session',userController.createSession)

router.get('/sign-out',userController.signOut);
module.exports=router;