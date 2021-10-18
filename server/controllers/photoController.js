require("../models/database");
const Category = require("../models/Category");
const Description = require("../models/Description");
 
 
//========================= GET the Home Page/index.ejs ============//
exports.homepage = async(req, res) => {
  try {
    const limitNumber = 5;// categories within the specified # of categories
    // query and display submitted photos and comments into the latest section with limit to 5
     // filter to help find photo based on their category like nature, histoy, etc and  display
    const categories = await Category.find({}).limit(limitNumber);
    const city = await Description.find({ 'category': 'City' }).limit(limitNumber);
    const nature = await Description.find({ 'category': 'Nature' }).limit(limitNumber);
    const history = await Description.find({ 'category': 'History' }).limit(limitNumber);
    const people = await Description.find({ 'category': 'People' }).limit(limitNumber);
    const animals = await Description.find({ 'category': 'Animlas' }).limit(limitNumber);
    const photo = {city, nature, history ,people, animals};

    res.render('index', { title: 'Home Page ', categories, photo } );
  } catch (error) {
    res.satus(500).send({message: error.message || "Error Occured" });
  }
}

/** GET Categories  */
exports.exploreCategories = async(req, res) => {
  try {
    const limitNumber = 20;
    const categories = await Category.find({}).limit(limitNumber);
    res.render('categories', { title: 'Photo - Categoreis', categories } );
  } catch (error) {
    res.satus(500).send({message: error.message || "Error Occured" });
  }
} 

 // ======================== GET the photoCategories byId Page  ============//
exports.exploreCategoriesById = async(req, res) => { 
  try {
    let categoryId = req.params.id;
    const limitNumber = 20;
    const categoryById = await Description.find({ 'category': categoryId }).limit(limitNumber);
    res.render('categories', { title: 'Photo - Categoreis', categoryById } );
  } catch (error) {
    res.satus(500).send({message: error.message || "Error Occured" });
  }
} 
 
//============================    GET  Photo Detail/ Photo description page  =================
exports.explorePhotos = async(req, res) => {
  try {
    let  detailId = req.params.id;
    const detail = await Description.findById(detailId);
    res.render('detail', { title: 'Photo - Descriptions', detail } );
  } catch (error) {
    res.satus(500).send({message: error.message || "Error Occured" });
  }
} 
 




//--------------- commenting the  data so it does not  get contiue to be inserted into the db which will create duplicate data--------
// async function descriptionData(){
// console.log('testing');
// try{
// return await Description.insertMany([

 // =========================================== 4 History data ===========================

// {
// "name" :  "The Greate Pyramids of Giza - Two",
// "description" : "The Greate Pyramids of Giza ",
// "category" : "History",
// "image" : "sphinx.jpg",
// "credit" : "Halle Thompson",
// },

//  //========================== 5 Animals Data =============================
//  {
//     "name" :  "My Parents Cat ",
//     "description" : "My Parents Cat",
//     "category" : "Animals",
//     "image" : "kitty.jpg",
//     "credit" : "Halle Thompson",
//     },

// {
//     "name" :  "Bird ",
//     "description" : "Early Bird",
//     "category" : "Animals",
//     "image" : "bird.jpg",
//     "credit" : "Halle Thompson",
//     },

//     {
//     "name" :  "Barking Dog ",
//     "description" : "Not all dogs go to heaven",
//     "category" : "Animals",
//     "image" : "barkDog.jpg",
//     "credit" : "Halle Thompson",
//     },
//     {
//     "name" : "Begging Dog ",
//     "description" : " Good Dog",
//     "category" : "Animals",
//     "image" : "dog.jpg",
//     "credit" : "Halle Thompson",
//     },

// ]);

// } catch(error){   
// console.log('insert failed' + error);
// }
// }
// descriptionData().then((data) =>{
// console.log(data);})
