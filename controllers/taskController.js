const postModels = require("../models/taskModels");

const createTask = async (req, res) => {
    const { title,tags,complete } = req.body
    if (!title) {
        return res.status(400).json({ message: 'title is required' })
    }
    const taskRout = await taskModels.create({
         title,body
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
    const { _id, title,tags,complete} = req.body
    if (!_id || !title) {
        return res.status(400).json({
            message: 'fields are required'
        })
    }
    const taskRout = await taskModels.findById(_id).exec()
    if (!taskRout) {
        return res.status(400).json({ message: 'task not found' })
    }
    taskRoutRout.title = title
    taskRoutRout.tags = tags
    taskRoutRout.complete = complete
    const updateTask = await taskRout.save()
    res.json(`'${updateTask.title}' updated`)
}
const deleteTask = async (req, res) => {
    const { id } = req.body
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
    const taskRout = await todosModels.findById(id).exec()
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