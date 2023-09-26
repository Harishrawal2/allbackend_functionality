const express = require("express");
const {
  GetAllTodos,
  CreateTodos,
  GetATodos,
  DeleteATodos,
  UpdateTodos,
  DeleteAllTodos,
} = require("../controllers/todo.controller");

const router = express.Router();

// Add New Todo
router.post("/createTodos", CreateTodos);

//Get All Todos
router.get("/todos", GetAllTodos);

// Get By Id Todos
router.get("/todos/:id", GetATodos);

// Delete Todo
router.delete("/todos/:id", DeleteATodos);

// Delete All Todo
router.delete("/todos", DeleteAllTodos);

// Update Todo
router.put("/todo/:id", UpdateTodos);

module.exports = router;
