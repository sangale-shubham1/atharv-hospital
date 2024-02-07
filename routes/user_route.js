const express = require("express");
const router = express.Router();
const exe = require("../config")


router.get("/",function(req,res){
    res.render("user/index.ejs")
})

router.get("/about_us",function(req,res){
    res.render("user/about_us.ejs")
})

router.get("/laboratory",function(req,res){
    res.render("user/laboratory.ejs")
})
module.exports = router