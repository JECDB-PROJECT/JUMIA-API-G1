const mongoose = require("mongoose")
const cartSchema = new mongoose.Schema(
    {
        items: [{
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
            },
            quantity: {
                type: Number,
                required: true,
                min: [1, 'Quantity can not be less then 1.'],
                default: 1
            },
            price:{type:Number, required: true},
            sellerId: {type:Object}
        }],
        userId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        totalCount: {
            type: Number
        },
        totalPrice:{
            type: Number           
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Cart",cartSchema);

/* {
    "items":[
        {
        "productId":"642c1754ff89ab6980edd0a9",
        "quantity":1,
        "price":50,
    },
    "userId":"6425633cf68f40eb571fff5f",
    "totalCount":1,
    "totalPrice":50
],
} */