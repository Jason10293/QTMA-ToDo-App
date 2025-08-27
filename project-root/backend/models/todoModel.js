import mongoose from "mongoose";
const todoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: false,
  },
});

export const toDo = mongoose.model("toDo", todoSchema);
