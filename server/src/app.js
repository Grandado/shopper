import express from 'express';
import cors from 'cors';
import { initConnection } from './db.js';
import { config } from 'dotenv';
import mysql from 'mysql2';

config();
const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

initConnection();

/* const db = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected!');
}); */
export default app;
