const express = require("express");
const router = express.Router();
const todosModels = require("../models/todosModels");
const todoController = require("../controllers/todoController");

//קבלת כל המשימות
router.get("/", todoController.getAllTodos)
//יצירת משימה חדשה
router.post("/", todoController.createTodo)
//עדכון משימה לפי ID
router.put("/id", todoController.updateTodo)
//מחיקת משימה לפי ID
router.delete("/id", todoController.deleteTodo)
//סימון משימה כהושלמה
router.put("/complete/:id", todoController.markTodoAsCompleted)

module.exports=router