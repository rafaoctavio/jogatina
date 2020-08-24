const http = require ('http');
const validador = require('')

http.createServer((req, res)=> {
    // res.writeHead(200, {"Content-type": "text/plain"})
    // res.end("Meu primeiro servidor");

    // switch(req.url) {
    //     case "/login.html":
    //     res.end("login.html");
    //     break;
    //     case "/cadastro.html":
    //     res.end ("cadastro.html");
    //     break;

    // }

    switch(req.url) {
            case "/login.html":
            res.end("login.html");
            break;
            case "/cadastro.html":
            res.end ("cadastro.html");
            break;


}).listen(3000, "localhost");




