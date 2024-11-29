const db = require("../routes/db-config");
const jwt = require("jsonwebtoken");

const attendance = async (req,res)=>{
    // console.log('In attendance');
    if(!req.cookies.userRegistered) return res.json({ status: "error", error: "Login session expired"});
    const {coursecode} = req.body
    const decoded = jwt.verify(req.cookies.userRegistered, process.env.JWT_SECRET);
    if(!coursecode) return res.json({ status: "error", error: "Please enter the coursecode whose attendance you would like to view"});
    else{
        db.query('select count(*) as total from attendance where coursecode=? and studentID=?',[coursecode,decoded.id], async(err,result)=>{
            if(err) throw err;
            // console.log(result[0]);
            else{
                db.query('select count(*) as present from attendance where coursecode=? and studentID=? and present="1"',[coursecode,decoded.id], async(error,results)=>{
                    if(error) throw error;
                    req.user = {total: result[0].total, present: results[0].present};
                    console.log(req.user);
                    // return res.redirect("/viewAttendance");
                    return res.json({status: "success", success: (req.user.present/req.user.total)*100});
                });
            }
        })
    }

}

module.exports = attendance;