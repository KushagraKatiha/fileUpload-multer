const express = require('express');
const router = express.Router();
const upload = require('../middleware/multer.js');
const uploadFile = require('../controllers/userControllers');

router.post('/uploadfile',upload.single('avatar'),uploadFile)


module.exports = router;