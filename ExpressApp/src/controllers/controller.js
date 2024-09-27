const Movie = require('../models/Movies');
const fs = require('fs');

//Function to import movies from JSON
exports.importMovies = async(req,res)=>{
    try{
        const data = JSON.parse(fs.readFileSync('./movies.json', 'utf-8'));
        await Movie.insertMany(data);//Import data into MONGODB
        res.status(200).send("Movies imported sucessfully");
    }
    catch(e){
            console.error(e);
    }
};