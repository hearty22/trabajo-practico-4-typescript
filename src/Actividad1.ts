//inicio
// ● Tipos Fundamentales:
// 1. Declara una variable productName de tipo string y asígnale un valor.
let productName: string = "Iphone 99 pro max giga pro ultra TSLP";
console.log(`nombre de producto:  ${productName}`);
// 2. Declara una variable productPrice de tipo número y asígnale un valor.
let productPrice: number = 9900;
console.log(`precio de producto:  ${productPrice}`);
// ● Tipo Unión (Union Type):
// 1. Declara una variable productId que pueda ser de tipo string o número.
let productId: number = 3;
console.log(`identificador de producto:  ${productId}`);
// Asignale valores diferentes en líneas separadas para probar ambos tipos.
productName = "eliminado";
console.log("Producto actualizado (nombre): ", productName);
productPrice = 0;
console.log("Producto actualizado (precio): ", productName);
productId = 3333;
console.log("Producto actualizado (id): ", productId);
// ● Interfaz Básica:
// 1. Crea una interfaz Product con las propiedades name y price.
interface Producto {
    id: number,
    name : string,
    price : number
}

// 2. Declara una variable myProduct de tipo Product y asígnale un objeto con
// datos.
const Gaseosa: Producto = {
    id: 2,
    name: "gaseosa sabor guarana",
    price: 69
};


