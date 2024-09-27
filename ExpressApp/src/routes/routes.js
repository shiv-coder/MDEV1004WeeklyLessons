const express = require('express');
const router = express.Router();
const movieController = require('../controllers/controller');

//Route to import movies
router.post('/import',movieController.importMovies);

//Route to get all movies
router.get('/',movieController.getMovies);


module.exports = router;