import { Router } from "express";
import { pool } from "../db.js";

const productRoutes = Router()

productRoutes.get('/', async (req, res) => {
  const { page, category, name } = req.query
  let whereSentence = name ? ` WHERE product.name LIKE "%${name}%"` : ``
  if (category) {
    if (name) {
      whereSentence += ` AND product.category = ${category} `
    } else {
      whereSentence += ` WHERE product.category = ${category} `
    }
  }
  try {
    const count = (await pool.query(`SELECT COUNT(*) FROM product${whereSentence}`))[0][0]
    const result = (await pool.query(`SELECT * FROM product ${whereSentence} LIMIT ${(page - 1 || 0) * 6}, 6 ;`))[0]
    res.send({ count: count["COUNT(*)"], pages: Math.ceil(count["COUNT(*)"] / 6), result })
  } catch (error) {
    console.log(error);
    res.send({ count: 0, pages: 0, result: [], error })
  }
})



export default productRoutes;