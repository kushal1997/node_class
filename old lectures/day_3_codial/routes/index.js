const express =require('express')

const router=express.Router();
const homecontroller=require('../controllers/home_controller')

console.log('router loaded')

router.get('/',homecontroller.home)
router.use('/users',require('./users'))

router.use('/users',require("./posts"))
//for any further routes, access from here
// router.use('/routerName',require('./routerfile'))
module.exports=router;