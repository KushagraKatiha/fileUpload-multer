require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadToCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) {
            throw new Error('Local file path is missing');
        }

        const result = await cloudinary.uploader.upload(localFilePath.toString(), {
            resource_type: "auto",
        });

        console.log(`Result from cloudinary: ${result.url}`);
        return result;
    } catch (error) {
        console.error(`Error uploading to Cloudinary: ${error}`);
    }
}

module.exports = uploadToCloudinary;
