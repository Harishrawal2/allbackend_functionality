const TodoModel = require("../models/todo.model");

// Add New Todos
const CreateTodos = async (req, res) => {
  try {
    const { title, disc } = req.body;

    // Create a new todo item using the Todos model
    const newTodo = new TodoModel({ title, disc });
    // Save the new todo item to the database
    const savedTodo = await newTodo.save();

    res
      .status(201)
      .json({ message: "New Todos Created Successfully", savedTodo });
  } catch (error) {
    res.status(500).json({ error: "Failed to add todo" });
  }
};

// Get A Todos
const GetAllTodos = async (req, res) => {
  try {
    const todos = await TodoModel.find();
    if (todos < 0) {
      return res
        .status(404)
        .json({ message: "Todolist Empty, Please Add New Todos" });
    }
    return res.status(200).json({ message: todos });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ Error: error });
  }
};

// Get A Todo
const GetATodos = async (req, res) => {
  try {
    const id = req.params.id;
    const todos = await TodoModel.findById({ _id: id });
    return res.status(200).json({ message: todos });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ Error: error });
  }
};

// Delete A Todo
const DeleteATodos = async (req, res) => {
  try {
    const id = req.params.id;
    const todos = await TodoModel.deleteOne({ _id: id });
    return res
      .status(200)
      .json({ message: "Todos Deleted Successfully", todos });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ Error: error });
  }
};

// Delete All Todo
const DeleteAllTodos = async (req, res) => {
  try {
    const todos = await TodoModel.deleteMany();
    return res
      .status(200)
      .json({ message: "Todos Deleted Successfully", todos });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ Error: error });
  }
};

// Update A Todo
const UpdateTodos = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, disc } = req.body;
    console.log(`Received ID: ${id}`);
    console.log(`Received Body: `, req.body);
    // Create a new todo item using the Todos model
    const updateTodo = await TodoModel.findByIdAndUpdate(
      id,
      { title, disc },
      { new: true }
    );

    if (!updateTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    const updateNewTodo = await updateTodo.save();
    res
      .status(201)
      .json({ message: "Todos Updated Successfully", updateNewTodo });
  } catch (error) {
    res.status(500).json({ error: "Failed to add todo" });
  }
};

module.exports = {
  CreateTodos,
  GetAllTodos,
  GetATodos,
  DeleteATodos,
  UpdateTodos,
  DeleteAllTodos,
};
