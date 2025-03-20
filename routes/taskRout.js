const express = require("express");
const router = express.Router();
const todosModels = require("../models/todosModels");
const todoController = require("../controllers/todoController");

//קבלת כל המשימות
router.get("/", taskController.getAllTasks)
//יצירת משימה חדשה
router.post("/", taskController.createTask)
//עדכון משימה לפי ID
router.put("/id", taskController.updateTask)
//מחיקת משימה לפי ID
router.delete("/id", taskController.deleteTask)
//סימון משימה כהושלמה
router.put("/complete/:id", taskController.markTaskAsCompleted)

module.exports=router