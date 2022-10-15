import dbConnect from "../../../lib/dbConnect"
import Product from "../../../models/Product"

export default async function handler(req, res) {

  
  const { method, query:{ id } } = req

  console.log(id)

  dbConnect()

  if (method === "GET") {
    try {
      const getOne = await Product.findById(id)
      res.status(200).json(getOne)
    } catch (error) {
      res.status(500).json(error.message)
    }
  }

  if (method === "PUT") {
    try {
      const product = await Product.create(req.body)
      
      res.status(200).json(product)
    } catch (error) {
      res.status(500).json(error.message)
    }
  }

  if (method === "DELETE") {
    try {
      const product = await Product.create(req.body)
      
      res.status(200).json(product)
    } catch (error) {
      res.status(500).json(error.message)
    }
  }
}

