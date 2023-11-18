const mongoose = require('mongoose');   

const userSchema = new mongoose.Schema({
    avatar:{
        public_id: {
            type: String,
        },
        secure_url: {
            type: String,
        }
    }
}, {timestamps: true});

module.exports = mongoose.model('User', userSchema)