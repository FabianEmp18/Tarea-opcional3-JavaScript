// Ejercicio 2 - Clasificación de estudiantes
const estudiantes = [
  { nombre: "Ana", calificacion: 8 },
  { nombre: "Luis", calificacion: 5 },
  { nombre: "Maria", calificacion: 7 },
  { nombre: "Pedro", calificacion: 4 }
];

let reprobados = 0;
console.log("Estudiantes aprobados:");
for (const estudiante of estudiantes) {
  if (estudiante.calificacion >= 6) {
    console.log(estudiante.nombre);
  } else {
    reprobados++;
  }
}
console.log(`Cantidad de estudiantes reprobados: ${reprobados}`);
