const jwt = require("jsonwebtoken");
const db = require("../routes/db-config");

const facultyLogin = async(req,res)=>{
    const {facultyID, password} = req.body;
    console.log(facultyID);
    if(!facultyID||!password) return res.json({ status: "error", error: "Please enter your facultyID and password"});
    else{
        db.query('select * from faculty where facultyID = ?',[facultyID], async(err,result)=>{
            console.log(password);
            // console.log(result[0].password);
            if(err) throw err;
            if(!result[0] || !(password == result[0].password)) return res.json({status: "error", 
            error: "Incorrect facultyID or Password"});
            else{
                const token = jwt.sign({id: result[0].facultyID }, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRES
                })
                const cookieOptions = {
                    expiresIn: new Date(Date.now()+process.env.COOKIE_EXPIRES*24*60*60*1000),
                    httpOnly: true
                }
                res.cookie("facultyRegistered", token, cookieOptions);
                return res.json({ status:"success", success: "Faculty has been logged in"});
            }
        })
    }
}

module.exports = facultyLogin;