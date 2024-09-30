//Just for local developement, not used in website
var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    if(req.url == "/images/Nachbereitung_100Jahre.webp"){
        res.writeHead(200);
        res.write(fs.readFileSync("./images/Nachbereitung_100Jahre.webp"));
        res.end();
        return;
    }

    res.writeHead(200);
    res.write(fs.readFileSync("index.html"));
    res.end();
}).listen(8080);