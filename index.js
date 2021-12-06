const http = require('http');
const fs = require('fs');

const PORT = 5500;

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    res.setHeader('Content-Type', 'text/html');
    let path = './docs/';

    switch(req.url) {
        case'/index.html':
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break
        // redirect from 'home' to index.html, just for fun
        case '/home':
            res.statusCode = 301;
            res.setHeader('Location', '/index.html');
            res.end();
            break;
        case '/about':
        case'/about.html':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/contact':
        case'/contact.html':
            path += 'contact.html';
            res.statusCode = 200;
            break;
        default:
            path += '404.html'
            res.statusCode = 404;
            break;
    }
    
    // send an html file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            //res.write(data);
            res.end(data);
        }
    });


});

server.listen(PORT, 'localhost', () => {
    console.log(`listening for requests on port ${PORT}`);
});

