import express from 'express';

const app = express();

app.get('/', (req, res) =>{
    res.json("OK")
})

app.listen(3000, (req, res) =>{
    console.log("RUNNING...")
})