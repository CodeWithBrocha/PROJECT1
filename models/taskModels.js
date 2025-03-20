const mongoose=require('mongoose')
const taskSchema=new mongoose.Schema({
    title:{
        type:mongoose.Schema.Types.String,
        required:true
        },
        tags: {
            type: [String]
        },
        complete: {
            type: Boolean,
            default: false
        } 
})
module.exports = mongoose.model('taskSchema', taskSchema)