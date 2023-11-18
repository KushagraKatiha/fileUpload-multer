// import {v2 as cloudinary} from 'cloudinary';
const cloudinary = require('cloudinary').v2;
          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_SECRET_KEY 
});

const uploadToCloudinary = async (localFilePath)=>{
    await cloudinary.uploader.upload(localFilePath,{
        resource_type: "auto",
    }, (error, result)=>{
        if(error) console.log(error);
        console.log(result);;

    })
}


module.exports = uploadToCloudinary;