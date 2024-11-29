const db = require("../routes/db-config");
const jwt = require("jsonwebtoken");

const markAttendance = (req,res) => {
    const {studentID, coursecode, date, present} = req.body
    if (!req.cookies.facultyRegistered) return res.json({ status: "error", error: "Login session expired"});
    const decoded = jwt.verify(req.cookies.facultyRegistered, process.env.JWT_SECRET);
    if(!studentID||!coursecode||!date||!present) return res.json({ status: "error", error: "Please enter all the necessary data"});
    else{
        console.log(date);
        db.query('insert into attendance set ?',{studentID:studentID,coursecode: coursecode, date:date, present: present}, (err,result)=>{
            if (err) throw err;
            return res.json({status: "success", success: "Attendance has been marked"});
        })
    }
}

module.exports = markAttendance;