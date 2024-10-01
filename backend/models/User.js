import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;

const newUser = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

newUser.set('toJSON', {
    transform: function (doc, ret, options) {
        delete ret.__v;
        delete ret.updatedAt;
        return ret;
    }
});

newUser.pre('save', async function (next) {
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

const User = mongoose.model('User', newUser)

export default User;