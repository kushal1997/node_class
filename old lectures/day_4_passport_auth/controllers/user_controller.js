const User=require('../models/user')
module.exports.profile=(req,res)=>{
    return res.render('user_profile',{
        title:"Users Profile",
    })
}

//render the sign up page
module.exports.signup = (req, res) => {
    if(req.isAuthenticated()) {return res.redirect('/users/profile')};

    return res.render('user_sign_up', {
        title: 'Codeial | Sign Up'
    })
}


//render the sign in page
module.exports.signin = (req, res) => {

    if(req.isAuthenticated()) {return res.redirect('/users/profile')};
    return res.render('user_sign_in', {
        title: 'Codeial | Sign In '
    })
}

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


module.exports.createSession=(req,res)=>{
    return res.redirect('/users/profile')
}
