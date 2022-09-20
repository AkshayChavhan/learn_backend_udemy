console.log('Node running ');

const express = require('express');

const  app = express();

app.get('/' ,(req,res) =>{
    res.sendFile(__dirname +'/index.html');
})


app.listen(3005 ,() => {
    console.log('server started on port number 3005');
});