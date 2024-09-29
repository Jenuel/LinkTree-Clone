import express from 'express'
import { addLink, getLinks, removeLink } from "../controllers/PageController";

const router = express.Router()

//Create Read Delete
router.post('/links', addLink)

router.get('/links', getLinks)

router.delete('/links/:id', removeLink)


