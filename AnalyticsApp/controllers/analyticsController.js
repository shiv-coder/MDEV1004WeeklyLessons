const Analytics = require('../model/analyticsModel');

const trackAnalytics = async(req,res,next)=>{
    const endpoint = req.path;
    const timestamp = new Date();

    try{
//find the document for current endpoint or create a new one
        let analytics = await Analytics.findOne({endpoint});

    if(!analytics){
        analytics = new analytics({endpoint});
    }
    //Update the hit count and timestamps
        analytics.hits +=1;//endpoint was accessed once more
        analytics.timestamps.push(timestamp);//record time of access
        //saving to database and moving to next middleware
        await analytics.save();
        console.log(`Endpoint ${endpoint} was hit at ${timestamp}`);
        next();
    }
    catch(error){
        console.error('Error tracking analytics', error);
        res.status(500).send('SErver error');
    }
};

//Controller to get analytics data

const getAnalytics = async(req,res)=>{
    try{
        const analyticsData = await Analytics.find();//queries database for all analytics document
        res.json(analyticsData);
    }catch(error){
        console.error('Error fetching analytics data', error);
        res.status(500).send('SErver error');
    }
};

module.exports ={
    trackAnalytics,
    getAnalytics
};