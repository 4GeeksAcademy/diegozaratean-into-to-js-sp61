console.log('desde archivo')

let num = 0 

console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)


console.log('Con FOR')
// for(inicializacion;coindicion;actualizacion)
for(let i=30;i <= 50;i+=5){
    console.log(i)
}

//. lenth.        1.      2.       3.        4
const frutas = ['pera','manzana','platano','fresa','banano']
// position.      0.      1.        2.        3.      4
console.log(frutas)


// console.log(frutas[0] + 's')
// console.log(frutas[1] + 's')
// console.log(frutas[2] + 's')
// console.log(frutas[3] + 's')
console.log('FRUTAS PLURAL')
for(i = frutas.length -1; i >= 0 ; i--){

    console.log(frutas[i] + 's')
}

console.log('FRUTAS PLURA reverse')
for(i = 0; i < frutas.length ; i++){

    console.log(frutas.reverse()[i] + 's')
}