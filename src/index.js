const express = require('express')
const app = express()
app.set('view engine','ejs')
//main code
app.get('/',(req,res)=>{
  res.render('index.ejs')
})
app.get('/about',(req,res)=>{
  res.render('about.ejs')
})
app.get('/static/htmlplusstylescss',(req,res)=>{
  res.sendFile(__dirname+'/css/styles.css')
})
app.get('/static/_java_script',(req,res)=>{
  res.sendFile(__dirname+'/js/app.js')
})
app.get('/static/images/image/insta',(req,res)=>{
  res.sendFile(__dirname+'/images/insta.webp')
})
app.get('/static/images/image/github',(req,res)=>{
  res.sendFile(__dirname+'/images/gh.webp')
})
app.get('/static/images/image/yt',(req,res)=>{
  res.sendFile(__dirname+'/images/yt.webp')
})
//listenig ports
app.listen(7070,()=>{
  console.log('running on Port 7070');
})