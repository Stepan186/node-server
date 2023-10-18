import {HttpCode} from "./helpers/method-enum";
import {todoItemsRoute} from "./todo-items/todo-items-route";

const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {

    switch (req.url) {
        case '/todo':
            let body: string = '';

            req
                .on('data', chunk => {
                    body += chunk;
                })
                .on('end', () => {
                    const data = todoItemsRoute(res, req.method, body);
                    res.end(JSON.stringify(data));
                });

            break;
        default:
            res.statusCode = HttpCode.NOT_FOUND;
            res.end('Not found')
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
