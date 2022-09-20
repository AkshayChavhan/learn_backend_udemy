const express = require('express');
// install body parser as "npm install body-parser" from terminal
const bodyParser = require('body-parser');      //importing bodyParser 


const  app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get('/' ,function(req,res){
    res.sendFile(__dirname +'/index.html');
});

// this is the post response for route '/' 
app.post('/',function(req,res){
    var number1 = Number(req.body.num1);
    var number2 = Number(req.body.num2);

    var result = number1 + number2 ;

    res.send("The result of the calculator is " + result);
});


app.listen(3005 ,() => {
    console.log('server started on port number 3005');
});