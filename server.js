const express = require('express');
const requestPackage = require('request');
const dotenv = require('dotenv').config();

const SECRET_KEY = process.env.API_KEY;
const app = express();

app.get("/", (request, response) =>{
    let city = request.query.city;
    requestPackage(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${SECRET_KEY}`, (errorApi, responseApi, bodyApi) => {
        if(responseApi.statusCode === 200){
            let data = JSON.parse(bodyApi);
            console.log(data.weather[0]);
            response.send(`The weather in your city ${city} is ${data.weather[0].description}`)
        }
    });
});

app.listen(3000, () => {
    console.log("Server started on port 3000 ...");
});