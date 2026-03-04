/*const http = require('http');*/
import {createServer} from "node:http";
const servidor = createServer(
    function (peticion, respuesta) {
        respuesta.writeHead(200, {'Content-Type': 'text/html'});
        respuesta.end(`<h1>Bienvenido a mi servidor</h1>
            <img src='https://images.pexels.com/photos/7330260/pexels-photo-7330260.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'>`);
    }
)

servidor.listen(3000, function(){
    console.log('Ejecutando el servidor en el puerto 3000, URL: http://localhost:3000');
})