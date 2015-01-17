var express = require('express');
var app = express();
var util = require('util');
var fs = require('fs');
var multer = require('multer');

app.use(multer({
    dest: "./uploads/"
}))

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.use(express.static('./public'));

/**
 * Post Image Example
 * multer = Node.js middleware for handling 'multipart/form-data'.
 */
app.post('/addimage', function(req, res) {
    if (req.files) {
        console.log(util.inspect(req.files));
        if (req.files.myFile.size === 0) {
            return next(new Error("Hey, first would you select a file?"));
        }
        fs.exists(req.files.myFile.path, function(exists) {
            if (exists) {
                res.end("Got your file!");
            } else {
                res.end("Well, there is no magic for those who don’t believe in it!");
            }
        });
    }
});


var server = app.listen(3000, function() {
    var host = server.address().address
    var port = server.address().port
    console.log('server: ', host, port)
});
