const { User } = require("../models");

const createUser = async (reqBody) => {
  return User.create(reqBody);
}

const getUserList = async (req, res) => {
  return User.find().populate("order").populate("product").populate("cart");
}

const deleteRecord = async (userId) => {
  return User.findByIdAndDelete(userId);
}

const userById = async (userId) => {
  return User.findById(userId);
}

const updateUser = async (userId, updateRecord) => {
  return User.findByIdAndUpdate(userId, { $set: updateRecord });
}

module.exports = {
  createUser,
  getUserList,
  deleteRecord,
  userById,
  updateUser
}