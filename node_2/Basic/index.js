//creating text file

const fs=require("fs");

fs.writeFile("temp.txt","KALYAN" ,func)

function func(err){
    if(err) throw err;
    console.log("Text file created");

}

//reading the created file

const fs=require("fs");
fs.readFile("message.txt",func)
function func(err,data){
    if(err) throw err;
    console.log(data.toString());
}
