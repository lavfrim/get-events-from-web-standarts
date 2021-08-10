import * as express from 'express';
import * as dotenv from 'dotenv';
import * as path from 'path';
import { events } from './routers/events';

dotenv.config();

const index = express().disable('x-powered-by');
const PORT = Number(process.env.APP_PORT) || 3003;

index.use(express.json());
index.use(path.posix.join('/api', 'events'), events);

process.on('uncaughtException', (err) => {
  console.log(`uncaughtException: ERR: ${err}`);
});

process.on('unhandledRejection', (reason) => {
  console.log(`unhandledRejection: reason: ${reason}`);
});

index.listen(PORT, () => {
  process.stdout.write(`----------------------------
Server starts in PORT: ${PORT}
----------------------------\n`);
});
