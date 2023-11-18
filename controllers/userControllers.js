const user = require('../models/userModel');

const uploadFile = (req, res) => {
    const {avatar} = req.body
    const newUser = new user({
        avatar
    })
    newUser.save() 
}