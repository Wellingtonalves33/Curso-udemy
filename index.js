const htpp = require('http');

htpp.createServer((request, response) => {
    response.write('hello world ou Hello zé da manga')
}).listen(3000)