const express = require('express');
const loggedIn = require('../controllers/loggedIn')
const logout = require("../controllers/logout")
const attendance = require("../controllers/attendance")
const facultyLoggedIn = require("../controllers/facultyLoggedIn")
const router = express.Router();


//sendFiles is for simply sending HTML files whereas
//render is for building the embedded JS files

router.get("/",loggedIn, (req,res) =>{
    if (req.user) {
        res.render("index", {status: "loggedIn", user: req.user});
    }else{
        res.render("index", {status: "no", user: "nothing"});
    }
})

router.get("/facultyHome", facultyLoggedIn, (req,res) =>{
    if (req.user) {
        res.render("index", {status: "facultyLoggedIn", user: req.user});
    }else{
        res.render("index", {status: "no", user: "nothing"});
    }
})

router.get("/viewAttendance", attendance, (req,res)=>{
    if(req.user){
        res.render("viewAttendance", {status: "viewing", user: req.user});
    }
})

router.get("/register", (req,res) =>{
    res.sendFile("register.html", {root:"./public/"});
})

router.get("/login", (req,res) =>{
    res.sendFile("login.html", { root: "./public/"});
    // res.redirect("/");
})

router.get("/logout", logout)

router.get("/attendance", (req,res) =>{
    res.sendFile("attendance.html", { root: "./public/"});
})

router.get("/markAttendance", (req,res) =>{
    res.sendFile("markAttendance.html", { root: "./public/"});
})

router.get("/facultyLogin", (req,res) =>{
    res.sendFile("facultyLogin.html", { root: "./public/"});
})

module.exports = router;