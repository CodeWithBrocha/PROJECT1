photoModels=require("..//models/photoModels")

const createPhoto=async(req,res)=>{
    const {tite,imgUrl}=req.body
    if(!title){
        return res.status(400).json({massage: 'title is required'})
    }
    const photoRout = await photoModels.create({
             title,imageUrl
        })
        if (photoRout) { 
            return res.status(201).json({ message: 'New photo created' })
        } else {
            return res.status(400).json({ message: 'Invalid photo ' })
        }
}
const getAllPhotos= async(req,res)=>{
    const photoRout = await photoModels.find().lean()
       if (!photoRout?.length) {
           return res.status(400).json({ message: 'No photos found' })
       }
       res.json(photoRout)
   }


module.exports={
createPhoto,

}