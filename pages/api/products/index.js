import dbConnect from "../../../lib/dbConnect"
import Product from "../../../models/Product"

export default async function handler(req, res) {

  
  const { method } = req

  await dbConnect()

  if (method === "GET") {
    try {
      const getAll = await Product.find()
      res.status(200).json(getAll)
    } catch (error) {
      res.status(500).json(error.message)
    }
  }

  if (method === "POST") {
    try {
      const product = await Product.create(req.body)
      
      res.status(200).json(product)
    } catch (error) {
      res.status(500).json(error.message)
    }
  }
}

