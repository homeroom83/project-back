import { Schema, model } from 'mongoose'

const schema = new Schema({
  name: {
    type: String,
    required: [true, '缺少商品名稱']
  },
  link: {
    type: String,
    required: [true, '缺少商品連結']
  },
  price: {
    type: Number,
    required: [true, '缺少商品價格']
  },
  image: {
    type: String,
    required: [true, '缺少商品圖片']
  },
  category: {
    type: String,
    required: [true, '缺少商品分類'],
    enum: {
      values: ['Nike', 'New Balance'],
      message: '商品分類錯誤'
    }
  },
  sell: {
    type: Boolean,
    required: [true, '缺少商品上架狀態']
  }
}, {
  timestamps: true,
  versionKey: false
})

export default model('products', schema)
