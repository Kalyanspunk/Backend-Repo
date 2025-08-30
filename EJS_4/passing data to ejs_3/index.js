import express from "express";
import bodyParser from "body-parser";


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const port=3001;
app.get("/",(req,res)=>{
    res.render("index.ejs");
});


app.post("/login",(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    res.render("index.ejs",{
        name: username,
    })
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
