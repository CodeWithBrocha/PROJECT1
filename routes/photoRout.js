const express = require("express");
const router = express.Router();
const photoModels = require("../models/photoModels")
const photoController=require("../controllers/photoController")

// קבלת כל התמונות
router.get("/", photoController.getAllPhotos)
// יצירת תמונה חדשה
router.post("/",photoController.createPhoto)
// עדכון תמונה מסוימת לפי ID
router.put("/:id",photoController.updatePhoto)
// מחיקת תמונה לפי ID
router.delete("/:id",photoController.deletePhoto)
// סימון תמונה כ"מאושרת" או מצב אחר
router.put("/Okay/:id",photoController.markPhotoAsOK)

module.exports=router