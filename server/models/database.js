// in this file all database connections will be coded
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser:true, useUnifiedTopology: true});
 
const db = mongoose.connection; // set the database connection 
db.on('error', console.error.bind(console, ' failed connecting to db')); 
db.once('open', function (){
   console.log('Connected to Mongodb!');
 }); 


// models
require('./Category');
require('./Description');