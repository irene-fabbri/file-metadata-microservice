const express = require('express');
const router = express.Router();
const multer  = require('multer');
const path = require('path');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "--" + file.originalname)
    }
});
const upload = multer({ storage: storage });

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html')); 
});  

router.post('/api/upload', upload.single('upfile'), (req, res) => {
    const {originalname, mimetype,size} = req.file;
    res.json({
        name: originalname,
        type: mimetype,
        size: size
    });
});

module.exports = router;