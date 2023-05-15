import { pool } from './db.js';

export default class ProductService {
  getAll(req, res) {
    pool.getConnection((err, conn) => {
      conn.query('SELECT * FROM products', (err, rows) => {
        res.json(rows);
      });
    });
  }
}
