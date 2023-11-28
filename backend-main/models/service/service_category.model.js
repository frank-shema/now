const mongoose = require("mongoose");
const Service = require("./service.model"); // Import the Service model

const serviceCategorySchema = new mongoose.Schema({
  title: {
    type: String,
        required: true,
    unique:true
  },
});

const ServiceCategory = mongoose.model(
  "ServiceCategory",
  serviceCategorySchema
);

module.exports = ServiceCategory;
