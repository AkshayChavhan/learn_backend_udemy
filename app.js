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
             res.write( `<p> The weather condition is ${weatherData.weather[0].description}</p>`)
             res.write(`<h1>The temperature in location is ${weatherData.main.temp} kelvin </h1>`)
            

            // image URL
            const icon = weatherData.weather[0].icon ;
            const imageURL = 'http://openweathermap.org/img/wn/'+ icon +'10d@2x.png';
            res.write("<img src=" + imageURL +">");
            res.send();
        })
    })


    // remember the send request can only be one as after send there will end of response
})

app.listen(3004 ,function(){
    console.log(`Server is running on port 3004`);
})