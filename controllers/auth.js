const express = require("express");
const register = require("./register");
const login = require("./login");
const logout = require("./logout");
const attendance = require("./attendance");
const markAttendance = require("./markAttendance");
const facultyLogin = require("./facultyLogin");

const router = express.Router();

router.post("/register", register)
router.post("/login", login)
router.get("/logout", logout)
router.post("/attendance",attendance)
router.post("/markAttendance",markAttendance)
router.post("/facultyLogin", facultyLogin)

module.exports = router;