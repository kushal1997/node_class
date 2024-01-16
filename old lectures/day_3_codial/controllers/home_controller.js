module.exports.home=(req,res)=>{

    console.log("cookies:",req.cookie)
    res.cookie('user_id',69)
    return res.render('home',{
        title:"Home"
    })
}
