const User = require('../models/user')
module.exports.profile = (req, res) => {
    if(req.cookies.user_id){
        User.findById(req.cookies.user_id)
        .then(user=>{
            if(user){
                return res.render('user_profile',{
                    title:"Users Profile",
                    user:user
                })
            }
        })
        .catch(err=>{
            console.log("Error in getting the profile",err);
            return res.redirect('/users/sign-in');
        })
    }
    else{
        return res.redirect('/users/sign-in');
    }
};


//render the sign up page
module.exports.signup = (req, res) => {
    return res.render('user_sign_up', {
        title: 'Codeial | Sign Up'
    })
}


//render the sign in page
module.exports.signin = (req, res) => {
    return res.render('user_sign_in', {
        title: 'Codeial | Sign In '
    })
}
// Make sure to replace this with the correct path to your user model

module.exports.create = (req, res) => {
    if (req.body.password !== req.body.confirm_password) {
        return res.redirect('back');
    }

    User.findOne({ email: req.body.email })
        .then((user) => {
            if (!user) {
                // User not found, create a new user
                User.create(req.body)
                    .then((createdUser) => {
                        console.log('User created successfully:', createdUser);
                        return res.redirect('/users/sign-in');
                    })
                    .catch((createErr) => {
                        console.log('Error in creating user while signing up:', createErr);
                        return res.redirect('back');
                    });
            } else {
                // User with the same email already exists
                console.log('User with the same email already exists');
                return res.redirect('back');
            }
        })
        .catch((findErr) => {
            console.log('Error in finding user in signing up page:', findErr);
            return res.redirect('back');
        });
};


//sign in & create a session for the user
module.exports.createSession = (req, res) => {

    // steps to authenticate
    //find the user
    User.findOne({ email: req.body.email })
    .maxTimeMS(20000)
        .then(user => {
            //handle user found
            if (user) {
                //handle password which dont match
                if(user.password != req.body.password){
                    console.log("password is incorrect");
                    return res.redirect('back')
                }

                //handle sesion creation

                res.cookie('user_id',user.id);
                return res.redirect('/users/profile')

            }
            //handle user not found
            else {
                return res.redirect('back');
            }

        })






}

module.exports.signOut=(req,res)=>{
    res.clearCookie('user_id');
    return res.redirect("/users/sign-in")
}

