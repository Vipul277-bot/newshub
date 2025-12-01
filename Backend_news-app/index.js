const connectToMongo = require('./db');
const express=require('express');
const PORT=5000;
const app=express();
const router=require("./routes/auth");
const cors = require("cors");

app.use(cors({
    origin: "http://localhost:3000",  // React domain
    methods: ["GET", "POST"],
    credentials: true
}));

app.use(express.json()); 

app.use('/user',router);
app.get('/',(req,res)=>{
    res.send('hello vipul');
});

app.listen(PORT,()=>{
    console.log(`server on ${PORT}`);
})


connectToMongo();