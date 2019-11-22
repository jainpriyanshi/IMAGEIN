const port = process.env.PORT || 3000;
    const express = require('express');
    const bodyParser = require('body-parser');
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
    var spawn = require("child_process").spawn;
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.get('/',(req,res)=>{
      res.send("hello");
    })
    app.post('/inpainting', upload.single('selectedFile'), (req, res) => {
      console.log(req.file.filename);
      var process = spawn('python3',["./inpaintingCode/inpainting.py","./uploads/"+req.file.filename]);
      console.log("process__started.................")
      process.stdout.on('data', function(data) { 
        res.send(data.toString()); 
    } )
   }); 
    app.post('/grayscale', upload.single('selectedFile'), (req, res) => {
      console.log(req.file.filename);
      var process = spawn('python3',["./inpaintingCode/grayscale.py","./uploads/"+req.file.filename]);
      console.log("process__started.................")
      process.stdout.on('data', function(data) { 
        res.send(data.toString()); 
    } ) 

    });
    app.post('/blur', upload.single('selectedFile'), (req, res) => {
      console.log(req.file.filename);
      var process = spawn('python3',["./inpaintingCode/blur.py","./uploads/"+req.file.filename]);
      console.log("process__started.................")
      process.stdout.on('data', function(data) { 
        res.send(data.toString()); 
    } ) 

    });
module.exports = app;
