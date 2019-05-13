import mongoose from 'mongoose'
const Schema = mongoose.Schema
const Shop = new Schema({
  name: {
    type: String//景点名
  },
  pos: {
    type:String
  },
  price: {
    type:Number
  },
  img: {
    type:String
  },
  url: {
    type:String
  },
  type:{
    type:String
  }

})

export default mongoose.model('Shop', Shop)