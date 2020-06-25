const {Schema, model} = require('mongoose');

const ProductSchema = new Schema({
    productName: String,
    productImage: String,
    price: String,
    quantity: String,
    ingredients: Array,
    benefits: Array,
    description:String,
    phrase: String,
    date: {
        type: Date,
        default: Date.now,
    }
})

module.exports = model('Product', ProductSchema)