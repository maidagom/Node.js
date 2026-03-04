import { error } from "node:console";

const url = "https://pokeapi.co/api/v2/pokemon";
const nombre_o_id = process.argv[2];
const consulta = `${url}/${nombre_o_id}`;
console.log("¿Donde se hace la consulta? ", consulta);

fetch(consulta)
.then(
    solicitud => {
        // console.log("solicitud: ", solicitud);
        if(solicitud.status === 200){
            return solicitud.json();
        }
        if(solicitud.status !== 200){
            console.error("Error al traer la información del pokemon");
            throw Error("No existe el  pokemon");
        }
    }
).then(
    function (respuesta) {
        console.log("respuesta: ", {
            "nombre": respuesta.name,
            "imagen": respuesta.sprites.front_default
        }
    );

    }
).catch(e => {
    console.error(e);
})