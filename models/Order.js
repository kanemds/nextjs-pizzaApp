import mongoose from "mongoose"

const OrderSchema = new mongoose.Schema({
  customer:{
    type:String,
    required:true,
    maxlength:60
  },
  address:{
    type:String,
    required:true,
    maxlength:200
  },
  total:{
    type:Number,
    required:true
  },
  status:{
    type:Number, // only number in array
    default:0
  },
  method:{
    type:Number, // only number in array
    required:true
  },
  timestamps:true
})

// check if Order model exist, else will create one
export default mongoose.models.Order ||
mongoose.model("Order", OrderSchema)