const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

const path = require('path');
const fileName = path.join(__dirname, 'index.html');
const fileName1 = path.join(__dirname,"bmiCalculator.html");


app.get("/",function(request,response){
    response.sendFile(fileName);
});

app.get("/bmiCalculator",function(request,response){
    response.sendFile(fileName1);
})

app.post('/',function(request,response){
    //console.log(request.body);
    var number1=Number(request.body.num1);
    var number2= Number(request.body.num2);
    var result = number1+number2;
    response.send("Your calculation is "+result);
})

app.post("/bmiCalculator",function(request,response){

    var w = request.body.weight;
    var h = request.body.height;
    var we = parseFloat(w);
    var he = parseFloat(h); 
    var res = we/(he*he);
    response.send("Your calculation is"+res);
})

app.listen(3000,function(){
    console.log("Server is started!");
});
