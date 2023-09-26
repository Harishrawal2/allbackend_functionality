const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const todoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    disc: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Todos = mongoose.model("todos", todoSchema);

module.exports = Todos;
