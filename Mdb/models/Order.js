const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    status: {
        type: Number,
        required: [true, 'Enter the status of the order!'],
    }, 
    user_id: {
        type: Schema.Types.ObjectId, 
        ref: 'user',
        required: [true, 'Enter the status of the order!']
    }, 
    total_price: {
        type: Number,
        minimum: 0
    }, 
    payment_type: {
        type: Number
    },
    deliverman_id: {
        type: String,
        ref: 'user',
        required: [true, 'Enter the status of the order!']
    },
    created_date: {
        type: Date
    },
    order_detail: {
        food_id: {
            type: String,
            ref: "food",
            required: [true, 'Enter the food id!'],
        }, 
        qty: {
            type: Number,
            minimum: 0
        }, 
        price: {
            type: Number
        }
    }
});

const Order = mongoose.model('orders', OrderSchema);
module.exports = Order;