import { Router } from "express";
import { pool } from "../db.js";

const productRoutes = Router()

productRoutes.get('/', async (req, res) => {
  const page = req.query.page - 1 || 0
  let whereName = req.query.name ? ` WHERE name LIKE "%${req.query.name}%"` : ''

  try {
    const count = (await pool.query(`SELECT COUNT(*) FROM product${whereName}`))[0][0]
    const result = (await pool.query(`SELECT * FROM product${whereName} LIMIT ${page * 6}, 6`))[0]
    console.log("products routes");
    res.send({ count: count["COUNT(*)"], pages: Math.ceil(count["COUNT(*)"] / 6), result })
  } catch (error) {
    console.log(error);
    res.send({count: 0, pages: 0, result: [], error})
  }
})



export default productRoutes;