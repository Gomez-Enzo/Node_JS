const readLineSync = require('readline-sync');
const {mostrarListaEstudiantes} = require('./lista_estudiantes');

const registrarEstudiantes = () => {
    const cantidadEstudiantes = readLineSync.question("Ingrese la cantidad de estudiantes a registrar: ");
    const estudiantes = [];

    for(let i = 0; i < cantidadEstudiantes; i++){
        const nombre = readLineSync.question(`Ingrese el nombre de estudiante ${i +1}: `);
        const edad = readLineSync.question(`Ingrese la edad del estudiante ${nombre}: `);

        const estudiante = {
            nombre,
            edad
        };;

        estudiantes.push(estudiante);
    }
    mostrarListaEstudiantes(estudiantes);
}

registrarEstudiantes();

