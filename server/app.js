
    const express = require('express');
    const multer = require('multer');
    const uuidv4 = require('uuid/v4');
    const path = require('path');
   
    const storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, './uploads');
      },
      filename: (req, file, cb) => {
        const newFilename = `${uuidv4()}${path.extname(file.originalname)}`;
        cb(null, newFilename);
      },
    });


    const upload = multer({ storage });
    const app = express();

    app.post('/', upload.single('selectedFile'), (req, res) => {
      console.log(req.file.filename);
      res.send();
    });
module.exports = app;
