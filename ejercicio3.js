// Ejercicio 3 - Sistema de evaluación de empleados
const empleados = [
  {
    nombre: "Carlos", departamento: "Ventas",
    evaluaciones: [7, 8, 6, 9, 7, 8, 7, 6, 8, 7, 6, 7], activo: true
  },
  {
    nombre: "Ana", departamento: "Marketing",
    evaluaciones: [4, 5, 3, 4, 4, 4, 3, 4, 4, 3, 4, 3], activo: true
  },
  {
    nombre: "Luis", departamento: "IT",
    evaluaciones: [8, 9, 8, 8, 9, 8, 8, 9, 9, 8, 8, 9], activo: false
  },
  {
    nombre: "Maria", departamento: "Finanzas",
    evaluaciones: [5, 6, 5, 6, 5, 6, 5, 6, 5, 6, 5, 6], activo: true
  }
];

let excelentes = 0;
let enRiesgo = 0;
const empleadosActivos = [];

console.log("Promedios de los empleados:");
for (const empleado of empleados) {
  let suma = 0;
  for (const nota of empleado.evaluaciones) {
    suma += nota;
  }
  const promedio = suma / empleado.evaluaciones.length;
  console.log(`${empleado.nombre} (${empleado.departamento}): ${promedio.toFixed(2)}`);

  if (promedio >= 8) excelentes++;
  if (promedio < 5) enRiesgo++;
  if (empleado.activo && promedio >= 6) {
    empleadosActivos.push(empleado);
  }
}

console.log(`Empleados excelentes: ${excelentes}`);
console.log(`Empleados en riesgo: ${enRiesgo}`);
console.log("Empleados activos con promedio mayor o igual a 6:");
for (const empleado of empleadosActivos) {
  console.log(empleado.nombre);
}
