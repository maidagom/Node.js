console.log("Observa lo que se trae desde la terminal: ",process.argv);
const operacion = process.argv[2];
const valor1 = process.argv[3];
const valor2 = process.argv[4];

if(operacion === "sumar"){
    console.log("El resultado de la suma es: ", eval(`${valor1} + ${valor2}`));
}
if(operacion === "restar"){
    console.log("El resultado de la resta es: ", eval(`${valor1} - ${valor2}`));
}