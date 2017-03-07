var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine","ejs");

var plan = ["sign up for a salsa class in Santiago de Cali, Colombia","go to Monteverde Extremo Park and try out Tarzan style swing in Costa Rica "];

app.get("/",function(req,res){
    res.render("home");
});
app.post("/addado",function(req,res){
    var newDo = req.body.newdo;
    plan.push(newDo);
    res.redirect("/plan");
});
app.get("/plan",function(req,res){
    res.render("plan",{plan:plan});
});


app.listen(process.env.PORT,process.env.IP,function(){
    console.log("It workss");
});