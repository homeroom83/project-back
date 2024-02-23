import products from '../models/products.js'
import { StatusCodes } from 'http-status-codes'

export const create = async (req, res) => {
  try {
    const data = { ...req.body, image: req.file.path }
    const result = await products.create(data)
    res.status(StatusCodes.OK).json({
      succes: true,
      message: '',
      result
    })
  } catch (error) {
    if (error.name === 'ValidationError') {
      const key = Object.keys(error.errors)[0]
      const message = error.errors[key].message
      res.status(StatusCodes.BAD_REQUEST).json({
        succes: false,
        message
      })
    } else {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: '未知錯誤'
      })
    }
  }
}
