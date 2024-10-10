import express from 'express'
import dotenv from 'dotenv/config'
import date from "./date"
import getURL from "./getURL"
import ViewEngine from "./ViewEngine"

const app = express()
const port = process.env.PORT

ViewEngine (app)

app.get('/',(req,res)=>{
    res.render('home');
})

app.listen(port,()=>{
    console.log(`example app listening on port $(port)`)
})

app.get('/about', (req,res)=>{
    res.render('about');
})

app.get('/date', (req,res)=>{
    res.send(date())
})

app.get('/geturl', (req,res)=>{
    res.send(getURL.getParamsURL(req)+"<br>"+getURL.getPath(req))
})

