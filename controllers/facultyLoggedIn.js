const db = require("../routes/db-config")
const jwt = require("jsonwebtoken")

const facultyLoggedIn = (req,res,next)=>{
    if(!req.cookies.facultyRegistered) return next();
    try{
        const decoded = jwt.verify(req.cookies.facultyRegistered, process.env.JWT_SECRET);
        db.query('select * from faculty where facultyID = ?', [decoded.id], (err,result) =>{
            if(err) return next();
            req.user = result[0];
            return next();
        })
    }catch(err){
        if(err) return next()
    }
}

module.exports = facultyLoggedIn; 