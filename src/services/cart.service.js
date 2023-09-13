const { Cart } = require("../models");

const createCart = async (reqBody) => {
  return Cart.create(reqBody);
}

const getCartList = async (req, res) => {
  return Cart.find().populate("user");
}

const deleteRecord = async (cartId) => {
  return Cart.findByIdAndDelete(cartId);
}

const cartById = async (cartId) => {
  return Cart.findById(cartId);
}

const updateCart = async (cartId, updateRecord) => {
  return Cart.findByIdAndUpdate(cartId, { $set: updateRecord });
}

module.exports = {
  createCart,
  getCartList,
  deleteRecord,
  cartById,
  updateCart
}