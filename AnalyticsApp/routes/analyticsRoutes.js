const express = require('express');
const router = express.Router();
const {trackAnalytics,getAnalytics} = require('../controllers/analyticsController');

router.get('/hello',trackAnalytics,(req,res)=>{
    res.send('This is an analytics app');
});

router.get('/about',trackAnalytics,(req,res)=>{
    res.send('About us');
});

router.get('/analytics',getAnalytics);

module.exports = router;
