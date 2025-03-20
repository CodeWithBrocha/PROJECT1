  const mongoose=require('mongoose')
  const postsSchema=new mongoose.Schema({
      title:{
          type:mongoose.Schema.Types.String,
          required:true
          },
          body:{
            type:mongoose.Schema.Types.String,
            required:true
          }
  })
  module.exports = mongoose.model('postsSchema', postsSchema)