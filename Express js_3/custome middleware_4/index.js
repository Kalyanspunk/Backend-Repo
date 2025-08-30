import express from "express";
import morgan from "morgan";


const app=express();
const port =3000;

// morgan to get the logs
app.use(morgan("common"));

app.get('/',(req,res)=>{
    res.send("Home");
});


//custome middle ware creation
function middleware(req,res,next){
    console.log(req.method);
    console.log(req.url);
    next();
}

app.use(middleware);

app.get('/',(req,res)=>{
    res.send("Home");
});

app.listen(port,()=>{
    console.log(`${port} port connected`);
});