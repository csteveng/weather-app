const express = require("express");
const request = require("request");

const app = express();

app.get("/", (request, response) =>{
    response.send("Website under construction ...");
});

app.listen(3000, () => {
    console.log("Server started on port 3000 ...");
});