import express from 'express';
import dotenv from 'dotenv/config';
import viewEngine from './viewEngine.js';
import webRoute from './routes/webRoute.js';
import userRoute from './routes/userRoute.js';
import methodOverride from 'method-override';

const app = express();
const port = process.env.PORT || 3000;

viewEngine(app);


app.use(methodOverride('_method'))

// Sử dụng webRoute cho các route
app.use('/', webRoute);
app.use('/users', userRoute);

// Route chính cho trang chủ
app.get('/', (req, res) => {
    res.render('main');
});

// Route trang about
app.get('/about', (req, res) => {
    res.render('about');  
});

// Route test EJS
app.get('/ejs', (req, res) => {
    res.render('test');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

app.get('/date', (req,res)=>{
    res.send(date())
})

app.get('/geturl', (req,res)=>{
    res.send(getURL.getParamsURL(req)+"<br>"+getURL.getPath(req))
})

