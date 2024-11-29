const express = require("express");
const db = require("./routes/db-config");
const app = express();
const cookie = require("cookie-parser");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;

app.use("/js",express.static(__dirname + "/public/js"))
app.use("/css",express.static(__dirname + "/public/css"))
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(cookie());
app.use(express.json());

db.connect((err)=>{
        if(err) throw err;
        console.log('Database Connected');
})

// app.get('/createdb', (req,res)=>{
//         let sql = 'select * from student';
//         db.query(sql, (err,result)=>{
//                 console.log("hello");
//                 console.log(result);
//                 res.send('Tables Displayed..');
//         });
// });

app.use('/', require("./routes/pages"));
app.use("/api", require("./controllers/auth"));

app.listen(PORT, ()=> {
        console.log('Server started on port 5000');
}); 
