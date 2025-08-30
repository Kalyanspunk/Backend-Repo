import express from "express";
import {dirname} from "path";
import {fileURLToPath} from "url";
import bodyParser from "body-parser";  //middleware

const __dirname= dirname(fileURLToPath(import.meta.url)); //this is used to extract file path dynamically

const port=3000;
const app=express();
app.use(bodyParser.urlencoded({extended:true}));  //middle ware for html

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/public/index.html");
})

app.post('/submit',(req,res)=>{
    res.send(req.body);
}) 

app.listen(port , ()=>{
    console.log(`${port} port is connected`);
});


