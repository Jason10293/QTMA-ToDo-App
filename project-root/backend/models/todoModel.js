import mongoose from "mongoose";
const todoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
});

export const toDo = mongoose.model("toDo", todoSchema);
