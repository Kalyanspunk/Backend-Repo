import express from "express";
import bodyParser from "body-parser";



const app=express();
const port=3000;
app.use(bodyParser.urlencoded({ extended: true }));  //its important in everytime



var a=Math.floor(Math.random()*7);


app.get("/",(req,res)=>{
    if(a==1){
    res.render("solution.ejs",{        //ejs syntax res.render("filename.ejs",{data to be sended})
        dayType : "This is weekend",
        advice : "CHILL Bro",
    });
}
else if(a==6){
    res.render("solution.ejs",{
        dayType : "This is weekday",
        advice : "Work Hard",
    });
}
else{
    res.render("solution.ejs",{
        dayType : "This is middle",
        advice : "Fuck you",
    });
}
});


app.listen(port,()=>{
    console.log(`${port} port connected`);
})