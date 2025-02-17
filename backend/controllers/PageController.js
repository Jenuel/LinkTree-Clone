import { request } from "express";
import Item from '../models/Item.js';

//Create Read Delete
const addLink = async (request, response) => {
    const { title, url, account } = request.body;

    try {
        const newItem = new Item({ title, url, account });
        const savedItem = await newItem.save();
        response.status(201).json(savedItem);
    } catch (error) {
        console.error('Error creating portfolio:', error.message);
        response.status(500).json({ error: 'Internal Server Error' });
    }
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

const updateLink = async (request, response) => {
    const { id } = request.params
    const updatedData = request.body

    try {
        const result = await Item.findOneAndUpdate(
            { _id: id },
            { $set: updatedData },
            { new: true }
        );

        if (result) {
            return response.status(200).json(result); 
        } else {
            return response.sendStatus(404); 
        }
    } catch (error) {
        return response.status(400).json({ error: error.message });
    }
}

const removeLink = async (request, response) => {
    const { id } = request.params
    try {
        const result = await Item.findOneAndDelete({ _id: id });
        if (result) {
            return response.sendStatus(204);  
        } else {
            return response.sendStatus(404);  
        }
    } catch (error) {
        return response.sendStatus(400);
    }
}

export { addLink, getLinks, updateLink, removeLink }