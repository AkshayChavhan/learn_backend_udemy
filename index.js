console.log('Node running ');

const express = require('express');

const  app = express() ;

app.listen(3000 ,() => {
    console.log('server started on port number 3000');
})