import mongoose from "mongoose";

const Schema = mongoose.Schema;

const newItem = new Schema({
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    account: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

newItem.set('toJSON', {
    transform: function (doc, ret, options) {
        delete ret.__v;
        delete ret.updatedAt;
        return ret;
    }
});

const Item = mongoose.model('Item', newItem)

export default Item;