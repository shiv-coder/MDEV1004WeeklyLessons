const express = require('express');
const router = express.Router();
const {trackAnalytics,getAnalytics} = require('../controllers/analyticsController');

router.get('/',trackAnalytics,(req,res)=>{
    res.send('index.html',{root:'./public'});
});

router.get('/about',trackAnalytics,(req,res)=>{
    res.send('About us');
});

router.get('/analytics',getAnalytics);

module.exports = router;
