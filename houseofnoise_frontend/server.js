const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
const port = process.env.PORT || 9090;
const config = () => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(allowCrossDomain);
    app.use(cors());
}
config();
app.get("/", function (req, res) {
    res.sendFile("server.html", { root: __dirname });
})
const server = app.listen(port, function () {
    console.log("Server running on port " + port);
})