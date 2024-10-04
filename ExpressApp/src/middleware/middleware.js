//Middleware to log incoming requests
const logger = (req,res,next)=>{
    console.log(`${req.method}${req.originalUrl} - ${new Date().toISOString()}`);
    next();
}

//Validate Movie data before creating or updating