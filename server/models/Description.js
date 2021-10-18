const mongoose = require('mongoose');

const descriptionSchema = new mongoose.Schema({
// create a schema to be displayed for the decription pages 
name:{
    type: String,
   required: "This is required",
},
description:{
    type: String,
   required: "This is required",
},
credit:{
    type: String,
    required: "This is required",
},
category:{
type: String,
 enum: ['Nature', 'History', 'City', 'People', 'Animals'],
 required: "This is required",
},
 
image:{
    type: String,   
    required: "This is required"
    },
 
});
descriptionSchema.index({ name: 'text', description: 'text' });
module.exports = mongoose.model('Description',descriptionSchema);