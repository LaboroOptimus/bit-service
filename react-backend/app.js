var express = require("express");
var testRoute = require('./routes/testroute');
var app = express();

app.use(testRoute);

app.listen(5000, () => {
    console.log("Server successfully launched!");
});