import express from 'express';
import Model from  './models';

const app = express();

app.get('/', async (req, res) =>{
    try{
        const data = await Model.Classes.findAll({
            include: Model.Schools,
            limit: 1
        })
        res.json(data);
    }
    catch(err){
        console.log(err);
    }   
})

app.get('/1', async (req, res) =>{
    try{
        const data = await Model.Schools.findAll({
            include: [Model.Classes],
            limit: 5
        })
        res.json(data);
    }
    catch(err){
        console.log(err);
    }   
})



app.listen(3002, (req, res) =>{
    console.log("RUNNING...")
})