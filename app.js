const express = require('express');
// requiring HTTPS module
const https = require('https');




const app = express();

app.get('/',function(req,res){

    // calling get method using HTTPS module
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=yavatmal&appid=facb69ad9a60521c9a5379f4b6e883e9';
    https.get(url,function(response){
        console.log(response);
        console.log(response.statusCode);       //you will get statuscode

        response.on('data' ,function(data){
            console.log(data);      //you will get buffer data

            // to turn buffer data into json i.e. obj formate
            const weatherData = JSON.parse(data);
            console.log(weatherData);
            
            // to turn object into string
            const weatherDataString = JSON.stringify(weatherData);
            console.log(weatherDataString);
            
            // fetching data from object
            console.log(weatherData.main.temp);
        })
    })


    res.send('Response from backend for get request');
})

app.listen(3004 ,function(){
    console.log(`Server is running on port 3004`);
})