"use strict";
//inicio
// 2. Funciones con Tipado
// Crear una función que gestione el inventario:
// ● Escribe una función llamada updateStock que acepte dos argumentos:
// ○ currentStock: de tipo número (el stock actual).
// ○ quantityChange: de tipo número (la cantidad a sumar o restar).
// ● La función debe devolver la suma de estos dos números, y el valor de retorno debe
// estar tipado como número.
// ● Llama a la función y muestra el resultado en la consola.
const updateStock = (currentStock, quantityChange) => {
    const sum = currentStock + quantityChange;
    return sum;
};
let stockPhones = 4;
let phoneQuantitychange = 89;
console.log("nuevo stock", updateStock(stockPhones, phoneQuantitychange));
