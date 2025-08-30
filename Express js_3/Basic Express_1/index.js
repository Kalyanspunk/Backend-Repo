import express from "express";
const app=express();
var port=3000;
app.listen(port,func);

function func(){
    console.log(`connected to ${port} port successfully`);
}