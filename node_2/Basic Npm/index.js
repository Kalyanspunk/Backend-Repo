
//commonjs implementation no need to add type:module in package.json

var genaratename=require("sillyname");

// //ECMA script to use import need to add type:module in package.json

import generatename from "sillyname";


//sillyname

var sillyname=generatename();
console.log(sillyname);
 

//super heroes
import superheroes, { randomSuperhero } from "superheroes";

const hero = superheroes[1];
console.log(`Your superhero is: ${hero}`);
