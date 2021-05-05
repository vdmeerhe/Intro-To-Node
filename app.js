// console.log('hello world');

var http = require('http');
var fs = require('fs');
var port = 8080;
var url = require('url');

http.createServer(function (req, res) {

    var q = url.parse(req.url, true);
    // console.log(q.pathname);
    var fileName = "." + q.pathname;
    if (fileName == "./") {fileName = './index';}
           

    fileName = fileName + ".html";
    console.log(fileName);

    fs.readFile(fileName, function (err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end("404 not found");
        }

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        console.log("...Incoming request: " + req.url);
        return res.end();
     });
   

}).listen(port);

console.log('server listening on port ' + port);



// var http = require('http');
// var url = require('url');

// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     var q = url.parse(req.url, true).query;
//     var dates = q.year + " " + q.month;
//     //  res.write(dates);
//     res.end(dates);

// }).listen(8080);