photoModels=require("../models/photoModels")

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
   const updatePhoto = async (req, res) => {
       const { _id, title,imageUrl} = req.body
       if (!_id || !title) {
           return res.status(400).json({
               message: 'fields are required'
           })
       }
       const photoRout = await photoModels.findById(_id).exec()
       if (!photoRout) {
           return res.status(400).json({ message: 'photo not found' })
       }
       photoRout.title = title
       photoRout.imageUrl = imageUrl
       const updatePhoto = await photoRout.save()
       res.json(`'${updatePhoto.title}' updated`)
   }
   const deletePhoto = async (req, res) => {
    try {
        const { id } = req.params;
        const photo = await photoModels.findById(id);

        if (!photo) {
            return res.status(404).json({ message: 'Photo not found' });
        }

        await photo.deleteOne();
        res.json({ message: 'Photo deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
   const markPhotoAsOK = async (req, res) => {
       const { id } = req.params;
   
       const photoRout = await photoModels.findById(id).exec();
       if (!photoRout) {
           return res.status(400).json({ message: 'Photo not found' });
       }
   
       photoRout.completed = true; // או כל מצב אחר שאתה רוצה להגדיר
       await photoRout.save();
   
       res.json({ message: `Photo ${photoRout.title} marked as completed` });
   };
   
   module.exports = {
       getAllPhotos,
       createPhoto,
       updatePhoto,
       deletePhoto,
       markPhotoAsOK
   }

