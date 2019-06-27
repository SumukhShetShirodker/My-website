const express = require('express')
const multer = require('multer')
const app = express()
const path = require("path")
const PORT=process.env.PORT || 7500

//multer

const storage = multer.diskStorage({
  destination: './src/uploads/',
  filename: function(req,file,cb){
    cb(null, file.feildname + '-' + Date.now() + path.extname(file.originalname));
  }
})

const upload = multer({
  storage : storage
}).single('myImage');

// main code
app.set('view engine','ejs')
app.use(express.static(path.join(__dirname + '/src')))
//main code
app.get('/',(req,res)=>{
  res.render('index.ejs')
})
//listenig ports
app.listen(PORT,()=>{
  console.log(`running on Port ${PORT}`);
})