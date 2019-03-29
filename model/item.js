var mongoose = require("mongoose");
const itemschema = mongoose.Schema({
  itemname: {
    type: String,
    required: false
  },
  itemquantity: {
    type: String,
    required: false
  },
  itembought: {
    type: Boolean,
    required: false
  }
});
module.exports = mongoose.model("item", itemschema);
