const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const emailSchema = new Schema({
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  message: { type: String, required: false },
  email: { type: String, required: false },
  sign: { type: String, required: false },
  senderAddress: { type: String, required: false },
  msgEncrypt: { type: String, required: false },

});

module.exports = mongoose.model('Email', emailSchema);
