const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/empresa",{
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

//defino esquema y modelo de la tabla de clientes
const clienteShema = new mongoose.Schema({
    nombre: String,
    edad: Number,
    email: String,
});

const Cliente = mongoose.model("Cliente", clienteShema);

//crear nuevo cliente

// const nuevoCliente = new Cliente({
//     nombre: "Juan",
//     edad: "30",
//     email: "juan@example.com",
// });
// const result = nuevoCliente.save().then(() => {
//     console.log("Cliente guardado correctamente");
// }).catch((err) => {
//     console.error(err);
// });

//recuperar y mostrar todos los clientes

// Cliente.find().then((clientes) => {
//     console.log("Clientes encontrados", clientes);
// }).catch((err) => {
//     console.error("Error al recuperar los clientes", error);
// });

//actualizar cliente

// Cliente.updateOne({nombre: "Juan"},{edad: 22}).then(() => {
//     console.log("Cliente actualizado correctamente");
// }).catch((err) => {
//     console.error("Error al actualizar cliente", err);
// });

//eliminar cliente
Cliente.deleteOne({nombre: "Juan"}).then(()=>{
    console.log("Cliente eliminado correctamente");
}).catch((err) => {
    console.error("Error al eliminar el cliente", err);
});
