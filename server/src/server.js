const http = require('http');

require('dotenv').config();

const app = require('./app');
const { mongoConnect } = require('./services/mongo');
const { loadPlanetsData } = require('./models/planetsModel');
const { loadLaunchData }  = require('./models/launchesModel');

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
  await mongoConnect();
  await loadPlanetsData();
  await loadLaunchData();

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}


startServer();
// "start": "set PORT=5000&& node src/server.js"   => windows shell
// "start": "PORT=5000 node src/server.js"   => default