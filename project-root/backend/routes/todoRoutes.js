import express from "express";
import { toDo } from "../models/todoModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    if (!req.body.title) {
      return res.status(400).send({
        message: "send all required fields: title",
      });
    }
    const newToDo = {
      title: req.body.title,
    };

    const todo = await toDo.create(newToDo);
    return res.status(201).send(todo);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const todo = await toDo.find({});

    return res.status(200).json({
      data: todo,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//detele todo
router.delete("/:todoId", async (request, response) => {
  try {
    const { todoId } = request.params;
    console.log(todoId);
    const todo = await toDo.findByIdAndDelete(todoId);
    if (!todo) {
      return response.status(404).json({ message: "todo not found" });
    }

    return response.status(200).send({ message: "successfully deleted todo" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//update todo
router.patch("/:todoId", async (req, res) => {
  const { todoId } = req.params;
  const { title: newTitle } = req.body;
  try {
    const updatedTask = await toDo.findOneAndUpdate(
      { _id: todoId },
      { $set: { title: newTitle } },
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ message: "todo not found" });
    }

    return res.status(200).json({
      message: "Successfully updated todo",
      data: updatedTask,
    });
  } catch (err) {
    res.status(500).send("Error updating todo");
    console.error(err.message);
  }
});
export default router;
