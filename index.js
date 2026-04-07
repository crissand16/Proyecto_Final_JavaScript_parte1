// Requerimientos funcionales
// 1 Mostrar todos los aprendices con nombre, nota y programa. 
// 2 Mostrar aprendices aprobados usando filter() con la condición nota >= 3.0. 
// 3 Mostrar aprendices reprobados usando filter() con la condición nota < 3.0. 
// 4 Transformar los nombres a mayúscula usando map(). 
// 5 Calcular el promedio general usando reduce().  
// 6 Ordenar los aprendices por nota de mayor a menor usando sort(). 
// 7 Clasificar una nota con switch en niveles como bajo, básico, alto o superior. -
// 8 Construir un menú repetitivo con while que permita ejecutar varias opciones hasta salir. 

const prompt = require("prompt-sync")();

const aprendices = [
	{ nombre: "Pepito", nota: 3.0, programa: "ADSO" },
	{ nombre: "Alejandra", nota: 4.5, programa: "Logística" },
	{ nombre: "Manuel", nota: 4.0, programa: "ADSO" },
	{ nombre: "Juana", nota: 2.8, programa: "Logística" },
	{ nombre: "Pedro", nota: 3.8, programa: "ADSO" }
];
console.table(aprendices) 

//FUNCION PARA CLASIFICAR LA NOTA
function clasificarNota(nota) {
	switch (true){
		case (nota < 3): return "Bajo";
		case (nota < 4): return "Basico";
		case (nota < 4.5): return "Alto";
		default: return "Superior";
	}
}

const tablaClasf = aprendices.map(aprendiz => ({
	nombre: aprendiz.nombre,
	nota: aprendiz.nota,
	clasificacion: clasificarNota(aprendiz.nota)
}))

console.table(tablaClasf)

//FUNCION MENU REPETITIVO CON WHILE

function clasificarNota1(nota) {
	switch (true){
		case (nota < 3): return "Bajo";
		case (nota < 4): return "Basico";
		case (nota < 4.5): return "Alto";
		default: return "Superior";
	}
}

let opcion = 0

while (opcion !== 4) {
	console.log("\n ----MENU-----");
	console.log("1. Ver Aprendices");
	console.log("2. Ver clasificacion");
	console.log("3. Buscar Aprendiz por Nombre");
	console.log("4. Salir del menu");

	opcion = Number(prompt("Elige una opcion: "));

	switch (opcion) {
		case 1:
			console.table(aprendices);
			break;

		case 2:
			const tabla = aprendices.map(a => ({
				nombre: a.nombre,
				nota: a.nota,
				clasificacion: clasificarNota1(a.nota)
			})); 
			console.table(tabla)
			break;

		case 3:
			const nombre = prompt ("Ingrese el nombre: ");
			const encontrado = aprendices.find(a =>
				a.nombre.toLowerCase() === nombre.toLowerCase()
			);

			if (encontrado) {
				console.table([encontrado]);
			} else {
				console.log("No encontrado");
			}
			break;

		case 4: 
			console.log("Saliendo...");
			break;

		default:
			console.log("Opcion Invalida")
	}
}