// HINTS:
// 1. Import express and axios
// 2. Create an express app and set the port number.
// 3. Use the public folder for static files.

import express from "express";
import axios from "axios";

const port=3000;
const app=express();

app.use(express.static("public"));



// 4. When the user goes to the home page it should render the index.ejs file.

app.get("/",(req,res)=>{
    res.render("index.ejs",{secret :hi});
})



// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.

app.listen(port,()=>{
    console.log("Port 3000 is connected");
})