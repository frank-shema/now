const mongoose = require("mongoose");
const ServiceCategory = require("./service_category.model");
const serviceSchema = new mongoose.Schema({
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ServiceCategory",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: [String],
    required: true,
  },

});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
