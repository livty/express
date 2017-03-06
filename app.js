var express = require("express");
var app = express();

app.get("/speak/:animal",function(req,res){
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof!",
        fox: "What does the fox say",
        snake: "Hssssss"
    }
    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal];
    res.send("The " + animal + " says '" + sound + "'");
});
app.get("/repeat/:word/:times",function(req,res){
    var times = Number(req.params.times);
    var word = req.params.word;
    var result ="";
    for(var i=0; i < times; i++){
        result += word + " ";
    }
        res.send(result);
    });
app.get("*",function(req, res) {
    res.send("Sorry, page is not found...What are you doing with you life?");
});
//Make it listen
app.listen(process.env.PORT, process.env.IP,function(){
    console.log("server has started");
});