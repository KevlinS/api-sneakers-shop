const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    price: {
        type: Number
    }
})


module.exports = mongoose.model('Product', productSchema);