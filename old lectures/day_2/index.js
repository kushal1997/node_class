const express = require('express')
const path = require('path')
const port = 3100;

const db = require('./config/mongoose.js')

const Contact = require('./models/contact.js')
const app = express();

//set EJS as a template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
//set middleware for parser
app.use(express.urlencoded({ extended: true }));


// creating first middleware
// app.use((req,res,next)=>{
//     // console.log("MiddleWare 1 called");
//     req.myName="kushal"
//     next();
// })

//second middleware 
// app.use((req,res,next)=>{
//     // console.log("MiddleWare 2 called");
//     console.log("My name from mw2",req.myName)
//     next();
// })

//middleware for static files
app.use(express.static('assets'))

app.get('/', (req, res) => {
    // console.log(req);
    // console.log(__dirname);
    // res.send(`<h1>Hello World!</h1>`);
    // return res.render('home')


    return res.render('home', { title: "My contacts List" })
})
var contactList = [
    {
        name: "Kushal",
        phone: "9128918"
    },
    {
        name: "John",
        phone: "1212121"
    },
    {
        name: "bharati",
        phone: "4545564550"
    }
]

// app.get('/practice', (req, res) => {

//     // console.log('from the get route controller',req.myName)
//     return res.render('practice', {
//         title: "Let us play with ejs",
//         contact_list: contactList
//     })
// })


app.get('/practice', (req, res) => {
    Contact.find({})
        .then(contacts => {
            return res.render('practice', {
                title: "Let us play with ejs",
                contact_list: contacts
            });
        })
        .catch(err => {
            console.log('Error getting contacts from mongo db', err);
            return res.status(500).send('Internal Server Error');
        });
});


app.post('/create-contact', (req, res) => {
    // return res.redirect('/');
    // console.log(req.body)
    // console.log(req.body.name," - ", req.body.phone )

    // contactList.push({
    //     name:req.body.name,
    //     phone:req.body.phone
    // })
    // return res.redirect('/practice')

    // another shortcut way to push data

    // contactList.push(req.body);
    // return res.redirect('back')

    Contact.create({ name: req.body.name, phone: req.body.phone })
        .then(newContact => {
            console.log('*******', newContact);
            res.redirect('back');
        })
        .catch(err => {
            console.error('Error creating contact:', err);
            res.status(500).send('Error creating contact');
        });



})

//example of querry params = /delete-contact/?phone=1212&name=andja
//example of params =/delete-contact/10


//deleting a contact

// using params

// app.get('/delete-contact/:phone',(req,res)=>{
//     // console.log(req.params)
//     let phone=req.params.phone;

//     let contactIndex=contactList.findIndex(contact=>contact.phone == phone)
//     // console.log(contactIndex);

//     if(contactIndex != -1){
//         contactList.splice(contactIndex, 1);
//     }
//     return res.redirect('back')
// })

//usng query params
// app.get('/delete-contact', (req, res) => {
//     let phone = req.query.phone;
//     let contactIndex = contactList.findIndex(contact => contact.phone == phone)
//     if (contactIndex != -1) {
//         contactList.splice(contactIndex, 1);
//     }
//     return res.redirect('back')
// })

app.get('/delete-contact',(req,res)=>{
    let id=req.query.id;

    Contact.findByIdAndDelete(id)
    .then(()=>{
        return res.redirect('back')
    })
    .catch(err =>{
        console.log('Error in deleting the contact',err)
        return res.status(500).send('Internal Server Error');
    })
})
app.listen(port, (err) => {
    if (!err) console.log(`Server is running on ${port}`);
    else console.log("error", err)
})