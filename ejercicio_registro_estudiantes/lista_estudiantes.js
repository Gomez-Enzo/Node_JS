const mostrarListaEstudiantes = (estudiantes) => {
    console.log("Lista de Estudiante Registrados");
    estudiantes.forEach((estudiante) => {
        console.log(`Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}`);
    });
}
module.exports = {mostrarListaEstudiantes};