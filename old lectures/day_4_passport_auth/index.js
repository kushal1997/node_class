const express=require('express')
const port=8000;
const expressLayouts=require('express-ejs-layouts')
const app=express();

const db =require('./config/mongoose')

//passport configuration
const session=require('express-session')
const passport=require("passport")
const passportLocal=require('./config/passport-local-strategy')
const MongoStore =require('connect-mongo') (session)


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('assets'));
app.use(expressLayouts);

app.set('layout extractStyles', true);
app.set('layout extractScripts', true);



app.set('view engine', 'ejs');
app.set('views', './views');

// express-session configuration
const sessionMiddleware = session({
    name: 'codeial',
    secret: 'secret',
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 100,
    },
    store: new MongoStore({
      mongooseConnection: db, // Assuming 'db' is your mongoose connection
      autoRemoveInterval: 60 * 60 * 24,  // Auto-remove expired sessions every 24 hours
    }),
  });
  
  app.use(sessionMiddleware);

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

// Routes
app.use('/', require('./routes'));
app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})