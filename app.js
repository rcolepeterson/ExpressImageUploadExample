var express = require('express');
var app = express();
var util = require('util');
var multer = require('multer'); //Node.js middleware for handling 'multipart/form-data'.

app.use(multer({
    dest: "./uploads/"
}))

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.use(express.static('./public'));

/**
 * Post Image Example
 */
app.post('/addimage', function(req, res) {
    if (req.files) {
        console.log(util.inspect(req.files));
        if (!req.files.myFile) {
            res.end("Error: No file? What's Up?");
        }
        res.end("I got your file! Thank you.");
    }
});

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('server: ', host, port);
});
