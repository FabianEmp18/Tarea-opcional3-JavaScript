// Ejercicio 1 - Inventario de supermercado
const inventario = [
  { nombre: "Laptop", categoria: "tecnología", precio: 800 },
  { nombre: "Mesa", categoria: "hogar", precio: 100 },
  { nombre: "Celular", categoria: "tecnología", precio: 500 },
  { nombre: "Silla", categoria: "hogar", precio: 50 }
];

console.log("Productos de tecnología:");
for (const producto of inventario) {
  if (producto.categoria === "tecnología") {
    console.log(`${producto.nombre}: $${producto.precio}`);
  }
}

let totalHogar = 0;
for (const producto of inventario) {
  if (producto.categoria === "hogar") {
    totalHogar += producto.precio;
  }
}
console.log(`Total de productos de hogar: $${totalHogar}`);
