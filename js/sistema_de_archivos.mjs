import { readFile, writeFile } from "node:fs/promises";

const datos = await 
    readFile("C:\\xampp\\htdocs\\desarrollo web\\node.js\\clase26\\pokemon.json", "utf-8")

console.log("datos: ", datos);
