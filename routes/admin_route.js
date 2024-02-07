const express = require("express")
const router = express.Router()
const exe = require("../config")

router.get("/",function(req,res){
    res.render("admin/index.ejs")
})

module.exports = router