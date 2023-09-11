const { Order } = require("../models");

/**Create record */
const createOrder = async (reqBody) => {
  return Order.create(reqBody);
}

/**Get list */
const getOrderList = async (req, res) => {
  return Order.find().populate("product").populate("user");
}

/**Delete record */
const deleteRecord = async (orderId) => {
  return Order.findByIdAndDelete(orderId);
}

/**Find by id */
const orderById = async (orderId) => {
  return Order.findById(orderId);
}

/**Update Order */
const updateOrder = async (orderId, updateRecord) => {
  return Order.findByIdAndUpdate(orderId, { $set: updateRecord });
}

module.exports = {
  createOrder,
  getOrderList,
  deleteRecord,
  orderById,
  updateOrder
}