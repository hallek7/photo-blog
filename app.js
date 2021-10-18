// add all the dependencies 
const express = require('express');
const expressLayouts =  require('express-ejs-layouts'); 
//const exp = require('constants');
//const dotenv = require('dotenv')
 
 
const app = express();

const port = process.env.PORT ||3300;
// to store all the db details 
require('dotenv').config();
 

//=========middlwares
app.use(express.urlencoded({extended: true}));
// set up public static folder for easier access and route of resources like images and css 
app.use(express.static('public'));
app.use(expressLayouts);
app.set('layout', './layouts/main'); // where all the layout for app are stored 
app.set('view engine', 'ejs');
// routes 
const routes = require('./server/routes/photoRoutes.js');
app.use('/', routes);

app.listen(port, ()=> console.log(`app is listening to port : ${port}`));