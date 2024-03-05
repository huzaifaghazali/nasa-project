const http = require('http');

const app = require('./app');

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

function startServer() {
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}


startServer();
// "start": "set PORT=5000&& node src/server.js"   => windows shell
// "start": "PORT=5000 node src/server.js"   => default