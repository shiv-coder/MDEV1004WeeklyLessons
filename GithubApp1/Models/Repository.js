const mongoose = require('mongoose');

const repositorySchema = new mongoose.Schema({
    name:{type:String,required:true},
    full_name:{type:String,required:true},
    description:{type:String},
    language:{type:String},
    url:{type:String},
    created_at:{type:String},
    updated_at:{type:String}
});

const Repository = mongoose.model("Repository",repositorySchema);
module.exports = Repository;