const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const ProductCartSchema = new mongoose.Schema({
    product: {
        type: ObjectId,
        ref:"Product",
    },
    name: String,
    count: Number,
    price: Number,
})
const OrderSchema = new mongoose.Schema({
    products: [ProductCartSchema],
    transaction_id: {},
    updated: Date,
    address: String,
    status: {
        type: String,
        default: "Recieved",
        enum: ["Cancelled","Delivered","Shipped","Processing","Recieved"]
    },
    user: {
        type: ObjectId,
        ref: "User",
    },
    amount: {
        type: Number,
    },

}, { timestamps: true });

const Order = mongoose.model("Order", OrderSchema);
const ProductCart = mongoose.model("ProductCart", ProductCartSchema);
module.exports = {Order,ProductCart}