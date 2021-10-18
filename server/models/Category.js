const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
// create a schema with name and image
name:{
    type: String,
   required: "This is required",
},

image:{
    type: String,
   required: "This is required",
},

});

module.exports = mongoose.model('Category',categorySchema);