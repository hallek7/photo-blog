const express = require('express');
const router = express.Router();
const photoController = require('../controllers/photoController');

/**
 * App Routes 
*/
router.get('/', photoController.homepage);
router.get('/detail/:id', photoController.explorePhotos );
router.get('/categories', photoController.exploreCategories);
router.get('/categories/:id', photoController.exploreCategoriesById);
 
 
module.exports = router;
 

 

