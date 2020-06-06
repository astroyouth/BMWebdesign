var express = require("express");
var app = express();
var request = require("request")
path = require('path')
app.set("view engine", "ejs")
app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res){
	// body...
	res.render("index")
})

app.get("/about", function(req, res){
	// body...
	res.render("about")
})
app.get("/contact", function(req, res){
	// body...
	res.render("contact")
})
app.get("/portfolio", function(req, res){
	// body...
	res.render("portfolio")
})
app.get("/pricing", function(req, res){
	// body...
	res.render("pricing")
})
app.get("/services", function(req, res){
	// body...
	res.render("services")
})
app.get("/pricing", function(req, res){
	// body...
	res.render("pricing")
})
app.listen(3000,function(){
	console.log("BM Web Design running");
});
