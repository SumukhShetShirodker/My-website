/**
 * Web Server
 * Nodejs & Express.js
 */
const express=require('express')
const app=express()
var port=process.env.PORT||7500
app.disable('x-powered-by')
app.set('view engine','ejs')
//EJS
app.get("/",(req,res)=>{
  res.render("index")
})
//"__dirname" stuff's
app.get("/styles/45876987.css",(req,res)=>{
  res.sendFile(__dirname + `/src/styles/styles.css` )
})

app.get("/scripts/45876987.typescriptakagoodjavascript",(req,res)=>{
  res.sendFile(__dirname + `/src/js/app.js` )
})
//listening stuff
app.listen(port,()=>{
  console.log(`Go on http://localhost:${port}/`)
})