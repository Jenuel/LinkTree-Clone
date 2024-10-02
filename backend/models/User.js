import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;

const userSchema = new Schema({
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

userSchema.set('toJSON', {
    transform: function (doc, ret, options) {
        delete ret.__v;
        delete ret.updatedAt;
        return ret;
    }
});

userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

userSchema.statics.login = async function(username, password){
    const user = await this.findOne({ username })
    if (user) {
        const result = await bcrypt.compare(password, user.password)
        if (result) {
            return user;
        }
        throw Error("Incorrect password or email")
    }
    throw Error("Incorrect password or email")
}

const User = mongoose.model('User', userSchema)

export default User;