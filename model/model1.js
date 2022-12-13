const mongoose = require("mongoose");
const abhay = new mongoose.Schema({
  type: String,
  category: String,
  headline: String,

  description: String,
});

const model1 = mongoose.model("model1", abhay);
module.exports = model1;
