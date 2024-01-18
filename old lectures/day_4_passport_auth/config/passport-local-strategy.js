const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const Users = require('../models/user')

// Authentication using passport
passport.use(
  new LocalStrategy(
    {
      usernameField: 'email', // This is the name of the field where we will enter our
    },
    (email, password, done) => {
      Users.findOne({ email: email })
        .then(user => {
          if (!user || user.password !== password) {
            console.log("Invalid credentials --> Passport");
            return done(null, false, { message: 'Invalid credentials' });
          }
          return done(null, user); // If everything is fine, return the user object
        })
        .catch(err => {
          console.log("error in finding user --> Passport");
          return done(err);
        });
    }
  )
);

//serializing the user to decide which key is to kept in the cookies
passport.serializeUser((user, done) => {
  done(null, user.id)
})


//deserializing the user from the key in the cookies
passport.deserializeUser((id, done) => {
  Users.findById(id)
    .then(user => {
      if (!user) {
        return done(null, false); // User not found
      }
      return done(null, user);
    })
    .catch(err => {
      console.log("error in finding user --> Passport");
      return done(err);
    });
});

//check if user is authenticated
passport.checkAuthentication = (req, res, next) => {
  //if the user is signed in, then pass on the request to the next function (controller's action)

  if (req.isAuthenticated()) return next();

  // if the user is not signed in
  return res.redirect('/users/sign-in');
}

passport.setAuthenticatedUser = (req, res, next) => {
  if (req.isAuthenticated())
    // req.user contains the current signed in user from the sesion cookie and we are just sending this for the locals for the views
    res.locals.user = req.user;

  next();
}
module.exports = passport;