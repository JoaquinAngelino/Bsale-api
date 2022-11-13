import express from 'express'
import router from './src/routes/index.js';
import { config } from 'dotenv';
config()

export const server = express()

server.use(express.json())
server.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use('/', router)
server.use((_req, res, next) => {
  res.status(404).send({ message: "endpoint not found" })
})

server.listen(process.env.PORT || 3001, () => {
  console.log('server running on port 3001');
})