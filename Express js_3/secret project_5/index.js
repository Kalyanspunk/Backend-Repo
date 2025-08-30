import express from "express";
import {dirname} from "path";
import {fileURLToPath} from "url";
import bodyParser from "body-parser";   

const __dir=dirname(fileURLToPath(import.meta.url));

const app=express();
const port=3000;
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.sendFile(__dir + "/public/index.html");
});

app.post("/check",(req,res)=>{
    if(req.body["password"]=="Kalyan"){
        res.sendFile(__dir+"/public/secret.html");
    }
    else{
        res.send("Password incorrect");
    }
});

app.listen(3000 ,()=>{
    console.log(`${port} port connected`);
});