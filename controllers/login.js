const jwt = require("jsonwebtoken");
const db = require("../routes/db-config");
const bcrypt = require("bcryptjs");

const login = async(req,res)=>{
    const {studentID, password} = req.body;
    console.log(studentID);
    if(!studentID||!password) return res.json({ status: "error", error: "Please enter your studentID and password"});
    else{
        db.query('select * from student where studentID = ?',[studentID], async(err,result)=>{
            console.log(password);
            // console.log(result[0].password);
            if(err) throw err;
            if(!result[0] || !(password == result[0].password)) return res.json({status: "error", 
            error: "Incorrect studentID or Password"});
            else{
                const token = jwt.sign({id: result[0].studentID }, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRES
                })
                const cookieOptions = {
                    expiresIn: new Date(Date.now()+process.env.COOKIE_EXPIRES*24*60*60*1000),
                    httpOnly: true
                }
                res.cookie("userRegistered", token, cookieOptions);
                return res.json({ status:"success", success: "User has been logged in"});
            }
        })
    }
}

module.exports = login;