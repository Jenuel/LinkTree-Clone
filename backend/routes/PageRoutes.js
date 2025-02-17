import express from 'express'
import { addLink, getLinks, updateLink, removeLink } from "../controllers/PageController.js";

const router = express.Router()


router.post('/links', addLink)

router.get('/links', getLinks)

router.get('/links/:id', updateLink)

router.delete('/links/:id', removeLink)


export default router