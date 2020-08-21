const http = require ('http');

http.createServer((req, res)=> {
    res.writeHead(200, {"Content-type": "text/plain"})
    res.end("Meu primeiro servidor");

    switch(req.url) {
        case "./login.html":
        res.end("Você está na pagina home!");
        break;
        case "cadastro"

    }

}).listen(3000, "localhost");


