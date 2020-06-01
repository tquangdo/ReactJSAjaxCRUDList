var express = require("express")
var app = express()
app.use(express.static("public"))
app.set("view engine", "ejs")
app.set("views", "./views")
app.listen(3001, function () {
    console.log('Bat dau start server!!!');
})

app.get("/", function (req, res) {
    res.render("client");
})

var mangserver = ["1", "2", "3", "4", "5"]
app.post("/getMangServer", function (req, res) {
    res.send(mangserver);
})

var bodyParser = require("body-parser")
var parser = bodyParser.urlencoded({ extended: false })
app.post("/addDivThemServer", parser, function (req, res) {
    var newNDN = req.body.serverNDN
    mangserver.push(newNDN)
    res.send(mangserver)
})

app.post("/xoaServer", parser, function (req, res) {
    var idXoa = req.body.idXoa
    mangserver.splice(idXoa, 1)
    res.send(mangserver)
})

app.post("/luuServer", parser, function (req, res) {
    var idLuu = req.body.idLuu
    mangserver[idLuu] = req.body.noidungLuu
    res.send(mangserver)
})