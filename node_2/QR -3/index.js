/*
step 1 : use inquirer npm to take user inputs
step 2 : use the qr-image npm to generate qr mapped with the user entered URL

*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";


const questions=[
    {
        type:"input",
        name : "qr",
        message:"Enter the URL",
    },
];


inquirer.prompt(questions).then((answers)=>{
    var qr_svg = qr.image(answers.message);
    qr_svg.pipe(fs.createWriteStream("qr.png"));
    console.log("QR saved succesfully");

});



