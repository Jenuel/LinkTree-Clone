import User from "../models/User"
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const register = async (request, response) => {
    const { firstName, lastName, username, password } = request.body;

    try {
        const user = User.create({ firstName, lastName, username, password });
        response.status(201).json(user)
    } catch (error) {
        response.status(400).send('Please send appropriate data! User not registered.')
    }
}

const login = (request, response) => {

}

const refresh = (request, response) => {

}

const logout = (request, response) => {

} 

export { register, login, refresh, logout }