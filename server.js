// Required Modules
const express = require("express");
const morgan = require("morgan");
const app = express();

const port = process.env.PORT || 8080;

app.use(morgan("dev"));
app.use(express.static("./"));

app.get("/", function (req, res) {
    res.sendFile('app.html', {root: 'angularjs'}); //app.html file of your AngularJs application
});

// Start Server
app.listen(port, function () {
    console.log("Express server listening on port " + port);
});