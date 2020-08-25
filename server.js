import express from 'express';
import Model from  './models';

const app = express();

app.get('/', async (req, res) =>{
    try{
        const data = await Model.Classes.findAll({
            include: [Model.Schools, Model.Users],
            limit: 10,
            offset: 5
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
            include: [Model.Classes, Model.Users],
            limit: 10,
            offset: 5
        })
        res.json(data);
    }
    catch(err){
        console.log(err);
    }   
})

app.get('/2', async (req, res) =>{
    
    try{
        const data = await Model.Users.findAll({
            include: [Model.Classes, Model.Schools],
            limit: 10,
            offset: 5
        })
        res.json(data);
    }
    catch(err){
        console.log(err);
    }   
})




app.listen(3000, (req, res) =>{
    console.log("RUNNING...")
})