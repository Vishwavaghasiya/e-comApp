const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        order: {
            type: mongoose.Types.ObjectId,
            ref: 'order'
        },
        product: {
            type: mongoose.Types.ObjectId,
            ref: 'product'
        },
        cart: {
            type: mongoose.Types.ObjectId,
            ref: 'cart'
        },
        userName: {
            type: String,
            trim: true,
        },
        email: {
            type: String,
            trim: true,
        },
        password: {
            type: String,
            trim: true,
        },
        firstName: {
            type: String,
            trim: true,
        },
        lastName: {
            type: String,
            trim: true,
        },
        dateOfBirth: {
            type: String,
            trim: true,
        },
        is_active: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const User = mongoose.model("user", userSchema);
module.exports = User;