import { Router } from 'express'
import * as auth from '../middlewares/auth.js'
import { create } from '../controllers/users.js'
import upload from '../middlewares/upload.js'
import admin from '../middlewares/admin.js'

const router = Router()

router.post('/', auth.jwt, admin, upload, create)

export default router
