const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Types.ObjectId,
            ref: "user",
        },
        category: {
            type: mongoose.Types.ObjectId,
            ref: "category",
        },
        productName: {
            type: String,
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        price: {
            type: Number,
            trim: true,
        },
        is_active: {
            type: Boolean,
            default: true
        }
    },
    {
        timeStamps: true,
        versionKey: false,
        toJSON: {
            transform: function (doc, data) {
                if (data?.product_image) {
                    data.product_image = `${config.base_url}product_images/${data.product_image}`;
                }
            },
        },
    }
);

const Product = mongoose.model('product', productSchema);
module.exports = Product;