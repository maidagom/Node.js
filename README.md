# Primera clase de NODE.JS (Clase26)
Este proyecto contiene ejemplos básicos desarrollados durante la primera clase de Node.js. Incluye la creación de un servidor web, manipulación del sistema de archivos, consumo de APIs externas y lectura de argumentos desde la terminal.

## Requisitos

- Node.js instalado (versión 18 o superior recomendada para soporte de `fetch` nativo).

## Estructura del Proyecto

- `servidor.js`: Crea un servidor HTTP básico en el puerto 3000.
- `js/traer_pokemonApi.mjs`: Consulta la PokeAPI y guarda los datos en `pokemon.json`.
- `js/leer_desde_terminal.js`: Script que realiza operaciones matemáticas simples (suma/resta) usando argumentos de consola.
- `js/sistema_de_archivos.mjs`: Ejemplo de lectura de archivos locales.
- `pokemon.json`: Archivo donde se almacenan los datos del último Pokémon consultado.

## Cómo ejecutar

### 1. Iniciar el servidor
```bash
node servidor.js
```
Luego visita [http://localhost:3000](http://localhost:3000).

### 2. Consultar un Pokémon
```bash
node js/traer_pokemonApi.mjs <nombre_o_id>
```
Ejemplo: `node js/traer_pokemonApi.mjs pikachu`

### 3. Usar la calculadora por terminal
```bash
node js/leer_desde_terminal.js <operacion> <valor1> <valor2>
```
Ejemplo: `node js/leer_desde_terminal.js sumar 10 5`

### 4. Leer archivo de Pokémon
```bash
node js/sistema_de_archivos.mjs
```

## Temas cubiertos
- Módulos `http` y `fs`.
- ESM (ECMAScript Modules).
- `process.argv` para entrada de datos.
- `fetch` para peticiones asíncronas.
