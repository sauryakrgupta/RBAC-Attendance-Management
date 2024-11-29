 const db= require("../routes/db-config");
//  for encryption
//  const bcrypt = require("bcryptjs");


 const register = async (req,res)=>{
    const  {studentID,fname,lname,password} = req.body
    if(!studentID||!password) return res.json({ status: "error", error: "Please enter your studentID and password"});
    else {
        console.log(studentID)
        db.query('select studentID from student where studentID= ?',[studentID], async(err,result)=>{
            if(err) throw err;
            if(result[0]) return res.json({ status: "error", error: "StudentID already exists"})
            else {
                console.log(password)
                db.query('insert into student set ?', {studentID: studentID, fname:fname, lname:lname, password: password}, (error,results) =>{
                    if(error) throw error;
                    return res.json({status: "success", success: "User has been registered"})
                })
            }
        })
    }
};

module.exports = register;