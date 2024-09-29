import mongoose from "mongoose";

const Schema = mongoose.Schema;

const newUser = new Schema({
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

const User = mongoose.model('User', newUser)

export default User;