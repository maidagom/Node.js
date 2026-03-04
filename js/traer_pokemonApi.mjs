import { readFile, writeFile } from "node:fs/promises";
const url = "https://pokeapi.co/api/v2/pokemon";
const nombre_o_id = process.argv[2];
const consulta = `${url}/${nombre_o_id}`;
console.log("¿Donde se hace la consulta? ", consulta);

const solicitud = await fetch(consulta);
const datos = await solicitud.json();
console.log("datos:", datos);

const guardar = {
    "nombre": datos.name,
    "imagen": datos.sprites.front_default
}
await writeFile("C:\\xampp\\htdocs\\desarrollo web\\node.js\\clase26\\pokemon.json", JSON.stringify(guardar), "utf-8")
const lectura = await 
    readFile("C:\\xampp\\htdocs\\desarrollo web\\node.js\\clase26\\pokemon.json", "utf-8")

console.log("datos guardados:", lectura);