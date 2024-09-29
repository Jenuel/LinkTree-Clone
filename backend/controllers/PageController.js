import { request } from "express";
import Item from '../models/Items';

//Create Read Delete
const addLink = async (request, response) => {

}

const getLinks = async (request, response) => {
    const { id } = request.params

    try {
        const items = await Item.find({ account: id}).sort({ createdAt: -1 })

        if (!items || items.length === 0) {
            return response.status(404).send({ message: 'There are no items associated with this account' })
        }

        response.status(200).json(items)
    } catch (error) {
        response.status(500).send({ message: 'Error fetching data', error: error.message })
    }
}

const removeLink = async (request, response) => {

}

export { addLink, getLinks, removeLink }