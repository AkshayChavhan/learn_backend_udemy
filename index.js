const express = require('express');
// install body parser as "npm install body-parser" from terminal
const bodyParser = require('body-parser');      //importing bodyParser 


const  app = express();

// creating route for '/'
app.get('/',function (req,res){
    res.send("hi there frombackend");
})




// listening at port 3005
app.listen(3005 ,() => {
    console.log('server started on port number 3005');
});