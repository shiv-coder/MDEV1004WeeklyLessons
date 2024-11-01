const express = require('express');
const bcrypt = requite('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');
const User = require('../models/models');
require('dotenv').config();
require('../database/db').connect();

const app= express();
app.use(express.json());

//Register route

app.post('/register',async(req,res)=>{
    try{
        const { firstName,lastName,email,password}=req.body;
        if(!(email && password && firstName && lastName)){
            return res.status(400).send('All fields are required');
        }

        const CheckUser = await User.findOne({email});
        if(CheckUser){
            return res.status(400).send('User is already registered');
        }
        const encryptedPassword = await bcrypt.hash(password,10);

        const user = await User.create({
            firstName,
            lastName,
            email:email.toLowerCase(),
            password:encryptedPassword
        });
        const token = jwt.sign({
            user_id:user._id,email},
            process.env.TOKEN_KEY,{
                expiresIn:'10m'}
            
        );
        user.token = token;
        return res.status(201).json(user);
    }
    catch(err){
console.log(err);
return res.status(500).send('An error occured');
    }
})