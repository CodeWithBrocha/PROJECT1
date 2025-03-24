const taskModels = require("../models/taskModels");

const createTask = async (req, res) => {
    const { title,tags,complete } = req.body
    if (!title) {
        return res.status(400).json({ message: 'title is required' })
    }
    const taskRout = await taskModels.create({
         title,tags
    })
    if (taskRout) { 
        return res.status(201).json({ message: 'New task created' })
    } else {
        return res.status(400).json({ message: 'Invalid task ' })
    }
}

const getAllTasks = async (req, res) => {
    const taskRout = await taskModels.find().lean()
    if (!taskRout?.length) {
        return res.status(400).json({ message: 'No task found' })
    }
    res.json(taskRout)
}

const updateTask = async (req, res) => {
    try{
    const { id } = req.params;
    const { title,tags,complete} = req.body;
    console.log("id:",id);
    if (!id || !title) {
        return res.status(400).json({
            message: 'fields are required'
        })
    }
    const task = await taskModels.findById(id);
    if (!task) {
        return res.status(404).json({ message: 'task not found' })
    }
    if(title)task.title = title
    if(tags)task.tags = tags
    if(complete!==undefined)task.complete = complete;
    const updateTask = await task.save()
    res.json({massage:`'${updateTask.title}' updated`,updateTask})
} catch (err) {
    console.error("❌ שגיאה בעדכון משימה:", err);
    res.status(500).json({ message: "❌ שגיאת שרת פנימית" });
}
};
const deleteTask = async (req, res) => {
    const { id } = req.params
    const taskRout = await taskModels.findById(id).exec()
    if (!taskRout) {
        return res.status(400).json({ message: 'task not found' })
    }
    const result = await taskRout.deleteOne()
    const reply = `task  deleted`
    res.json(reply)
}
const markTaskAsCompleted = async (req, res) => {
    const { id } = req.params
    const taskRout = await taskModels.findById(id).exec()
    if (!taskRout) {
        return res.status(400).json({ message: 'tasks not found' })
    }
    taskRout.complete = !taskRout.complete
    const updateTask = await taskRout.save()
    res.json(`'${updateTask.name}' updated`)
}
module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask,
    markTaskAsCompleted
}