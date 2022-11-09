import express from 'express'
import router from './src/routes/index.js';
import { config } from 'dotenv';
config()

const server = express()

server.use(express.json())
server.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use('/', router)
server.use((req, res, next) => {
  res.status(404).send({message: "endpoint not found"})
})

const port = 3001

server.listen(port, () => {
  console.log('server running on port 3001');
})