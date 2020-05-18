const { Schema, model } = require("mongoose");

const schema = Schema({
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = model("Todo", schema);
