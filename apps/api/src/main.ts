import * as express from 'express';

import { MongoClient } from 'mongodb';

import * as cors from 'cors';

import { json } from 'body-parser';

import { router as authRoute } from './app/routes/auth';
import { router as filmesRoute } from './app/routes/filmes';
import { requireJwtToken } from './app/middlewares/jwt';

MongoClient.connect(
  'mongodb://angular-final-2022_devcontainer-db-1/:27017',
).then((client: MongoClient) => {
  app.locals.db = client.db('app-filmes');
  console.log('    Conectado ao MongoDB.');
}).catch(err => {
  console.error('    Erro ao conectar ao MongoDB', err);
});

const app = express();

app.use(cors());

app.use(json());

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

app.use('/api/auth', authRoute);
app.use(requireJwtToken);
app.use('/api/filmes', filmesRoute);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
