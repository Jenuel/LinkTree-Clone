import express from 'express'
import { authenticate, register, addLink, removeLink } from "../controllers/PageController";

const router = express.Router()

//creates a new user (Registering)
router.post("/register", register)


