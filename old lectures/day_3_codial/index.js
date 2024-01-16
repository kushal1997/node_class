const express = require('express');
const cookieParser = require('cookie-parser');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const db = require("./config/mongoose");

// Global Middleware (applies to all routes)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static('assets'));
app.use(expressLayouts);

// Extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// Routes
app.use('/', require('./routes'));

// View Engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Port
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
