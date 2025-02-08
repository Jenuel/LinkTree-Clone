import User from "../models/User"
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


const maxAge = 4 * 24 * 60 *60

const createJWT = (id) => {
    return jwt.sign({ id }, 'S3CR3T', {
        expiresIn: maxAge
    });
}

const register = async (request, response) => {
    const { firstName, lastName, username, password } = request.body;

    try {
        const user = User.create({ firstName, lastName, username, password });
        const token = createJWT(user._id)
        response.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000})
        response.status(201).json(user._id)
    } catch (error) {
        response.status(400).send('Please send appropriate data! User not registered.')
    }
}

const login = async (request, response) => {
    const  { username, password } = request.body
    
    try {
        const user = await User.login(username, password)
        const token = createJWT(user._id)
        response.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000})
        response.status(200).json({ user: user._id })
    } catch (error) {
        response.status(400).json({})
    }
}

const refresh = (request, response) => {

}

const logout = (request, response) => {
    response.cookie('jwt', '', { maxAge: 1 })
} 

export { register, login, refresh, logout }