/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';

import { MongoClient } from 'mongodb';

MongoClient.connect(
  'mongodb://angular-final-2022_devcontainer-db-1/:27017',
).then((client: MongoClient) => {
  app.locals.db = client.db('app-filmes');
  console.log('    Conectado ao MongoDB.');
}).catch(err => {
  console.error('    Erro ao conectar ao MongoDB', err);
});

const app = express();

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
