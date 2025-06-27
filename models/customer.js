const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    age: { type: Number },
    moneySpent: { type: Number },
  },
  { collection: "Customer" }
);

module.exports = mongoose.model("Customer", customerSchema);
