const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('Hola Mundo!');
});

app.post('/productos',(req,res)=>{
    res.send('Productos creado correctamente');
});

app.put('/productoM',(req,res)=>{
    res.send('Productos modificado correctamente');
});
const port = 3000;

app.listen(port,()=>{
    console.log(`Servidor Express.js es funcionamiento en el puerto ${port}`);
});