const express = require('express')
const app = express()
const path = require("path")
const PORT=process.env.PORT || 7500
app.set('view engine','ejs')
app.use(express.static(path.join(__dirname + '/src')))
//main code
app.get('/',(req,res)=>{
  res.render('index.ejs')
})
app.get('/login',(req,res)=>{
  res.render('login.ejs')
})
//listenig ports
app.listen(PORT,()=>{
  console.log(`running on Port ${PORT}`);
})