// Requerimientos funcionales
// 1 Mostrar todos los aprendices con nombre, nota y programa. -
// 2 Mostrar aprendices aprobados usando filter() con la condición nota >= 3.0. -
// 3 Mostrar aprendices reprobados usando filter() con la condición nota < 3.0. -
// 4 Transformar los nombres a mayúscula usando map().  -
// 5 Calcular el promedio general usando reduce().  -
// 6 Ordenar los aprendices por nota de mayor a menor usando sort(). 
// 7 Clasificar una nota con switch en niveles como bajo, básico, alto o superior. 
// 8 Construir un menú repetitivo con while que permita ejecutar varias opciones hasta salir.

const aprendices = [
	{ nombre: "Pepito", nota: 3.0, programa: "ADSO" },
	{ nombre: "Alejandra", nota: 4.5, programa: "Logística" },
	{ nombre: "Manuel", nota: 4.0, programa: "ADSO" },
	{ nombre: "Juana", nota: 2.8, programa: "Logística" },
	{ nombre: "Pedro", nota: 3.8, programa: "ADSO" }
];
console.table(aprendices)

const aprobados = aprendices.filter((aprendiz) => aprendiz.nota >= 3.0)
console.log(aprobados)

const reprobados = aprendices.filter((aprendiz) => aprendiz.nota < 3.0)
console.log(reprobados)

///TRANFORMAR A MAYUSCULAS///
const nom_modificados = aprendices.map( aprendiz => aprendiz.nombre.toUpperCase());
console.log(nom_modificados)

//FUNCIÓN CALCULAR PROMEDIO///

function calcularPromedio() {
    const suma = aprendices.reduce((acc, aprendiz) => acc + aprendiz.nota, 0);
    return (suma / aprendices.length).toFixed(2);
}
console.log("El promedio de los estudiantes es: " + calcularPromedio())

//ORDEN DE NOTAS//
const orden_nota = 
    [...aprendices].sort((a, b) => b.nota - a.nota, 0);
console.log(orden_nota)
