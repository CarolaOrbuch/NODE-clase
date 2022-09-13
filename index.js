const express = require ('express');
const app = express(); 
const port = 9000; //creando una constane port con num (9000 se suele usar para back)
//linkeando una ruta con una funcion

//callback, crear rutas
app.get("/", (req, res) => { //llamamos a get que es una funcion, 
    //cuando esuches una request get en esta ruta (/), devolve "Hello World!""
    res.send("Hello World!");
});

// prender el servidor, escuchar al puerto y cuando se prenda mostrar que empezo a andar.
app.listen(port,() => {
    console.log(`> Server running on port ${port}`);
});