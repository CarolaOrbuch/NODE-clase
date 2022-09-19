const express = require ('express');
const app = express(); 
const port = 9000; 
const menu = require('./menu.json');
app.use(express.json());

//callback, crear rutas
app.get("/menu/", (req, res) => { 
    res.json(menu);
});

app.get("/menu/:id", (req, res) => {
    const id = req.params.id;

    
});

app.listen(port,() => {
    console.log(`> Server running on port ${port}`);
});