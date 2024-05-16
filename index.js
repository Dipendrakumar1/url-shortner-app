const express=require('express');
const app=express();
const userRouter=require('./route/route');
const mongoDBConnect=require('./connection');
const PORT=8002;

// MongoDB connection
mongoDBConnect('mongodb://127.0.0.1:27017/url-shorter').then(()=>{console.log('MongoDB Connected.')}).catch((e)=>{console.log('Something not good ',e)});
// middleware
app.use(express.json());

app.use('/url',userRouter);

// Listening server on
app.listen(PORT,()=>{console.log(`Server Started At ${PORT}.`)});