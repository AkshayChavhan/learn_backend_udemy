console.log('Node running ');

const express = require('express');

const  app = express();

// what should happen whrn server request GET from browser
// callback function will tell what to do 

app.get('/',(request,response)=>{
// console.log(request);     //this will return you the object in request
// response.send('Hello'); //this will send Hello in browser
response.send('<h1>Hello World </h1>'); //this will send Hello Word as H1 tag in browser
})


app.get('/contact' ,(req,res) =>{
    res.send('I am at contact pages');
})

app.get('/about' ,(req,res) =>{
    res.send('I am at about pages');
})

app.get('/hobbies' ,(req,res) =>{
res.send('<ul><li>Hobbies 1</li><li>Hobbies 2</li><li>Hobbies 3</li></ul>');
})


app.listen(3005 ,() => {
    console.log('server started on port number 3005');
});