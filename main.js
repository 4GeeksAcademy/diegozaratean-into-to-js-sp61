console.log('feliz dia a todas')
// un codigo que si mi nomina es menor a 1000 eur indique qeu debo apgasr 5% de impuesto si es mayor indique quedebo pagar 10 %

// PSEDUO CODIGO
// tener el sueldo definido en un variable
let sueldo = 9000
// comparar el sueldo con 1000 y dependineo si es mayor o no msotrar al usuairo
// let mensaje = ''
// if(sueldo >= 1000){
//     mensaje = 'debes pagar el 10% de impuestos'
// }else{
//     mensaje = 'debes pagar el 5% de impuestos'
// }
// console.log(mensaje)

// Ternary operator
// (condicion) ? si la condicion es verdadera:si la condicion no se cumple;

let mensaje = (sueldo >= 1000) ? 'debes pagar el 10% de impuestos' : 'debes pagar el 5% de impuestos';
console.log(mensaje)

// document.querySelector('#content').innerHTML = `<p>${mensaje}</p>`

document.querySelector('#content').insertAdjacentHTML(
    'beforeEnd',
    `<p>${mensaje}</p>`
)