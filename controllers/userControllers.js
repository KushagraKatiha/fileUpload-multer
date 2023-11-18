const user = require('../models/userModel');
const uploadToCloudinary = require('../utils/cloudinary.js');

const uploadFile = async (req, res, next) => {
    try {
    const newUser = new user({
        avatar: {
            public_id: "dummy_id",
            secure_url: "dummy_url"
        }
    })

    console.log(`File path: ${req.file.path}`);

    const result = await uploadToCloudinary(req.file.path);
    console.log(`Result: ${result.public_id}`);
    if(result){
        newUser.avatar.public_id = result.public_id,
        newUser.avatar.secure_url = result.secure_url
    }else{
        throw new Error('Error uploading file to cloudinary')
    }

    await newUser.save() 
    res.send('File uploaded successfully.')
    next()
    } catch (error) {
        res.status(400).json({
            message: `Error from controller ${error.message}`,
            status: false
        })
    }
}

module.exports = uploadFile;