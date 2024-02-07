const express = require("express")
const app = express()
const upload = require("express-fileupload")
const bodyparser = require("body-parser")



const user_route = require("./routes/user_route")
const admin_route = require("./routes/admin_route")


app.use(express.static("public/"))
app.use(upload())
app.use(bodyparser.urlencoded({extended:true}))

app.use("/",user_route)
app.use("/admin",admin_route)

app.listen(1000)