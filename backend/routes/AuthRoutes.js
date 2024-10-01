import express from 'express'
import { register, refresh, login, logout } from '../controllers/AuthController'

const router = express.Router()


//creates a new user (Registering)
router.post("/register", register)

router.post('/auth', login) 

router.get('/refresh', refresh)

router.post('/logout', logout)
