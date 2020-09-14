const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: String,
        required: true
    },
    size: {
        type: Array,
        required: true
    },
    image: {
        type: Array,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('product', productSchema)