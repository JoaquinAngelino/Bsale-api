import { Router } from "express";
import { pool } from '../db.js'

const categoryRoutes = Router()

categoryRoutes.get('/', async (req, res) => {
  try {
    const result = (await pool.query('SELECT * FROM category'))[0]
    res.send(result)
  } catch (error) {
    console.log(error);
  }
})



export default categoryRoutes;