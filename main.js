console.log('desde archivo 123')


function saludo(){
    console.log('Hola')
}

saludo()
// saludo()
// saludo()

// function transportar(origen,destino){
//     console.log('Saliendo de ' + origen)
//     console.log('moviendome')
//     console.log('llegando a ' + destino)
// }
// transportar('casa','super')
// transportar('super','oficina')
// transportar('oficina','casa')
// transportar()
// transportar()

// let alumno = 'juan'
// console.log('Andes de la funcion ' + alumno)
// function saludarAlumno(alumno){
//     console.log('Dentro de la funcion ' + alumno)
//     console.log('Hola ' + alumno)
// }

// console.log('Despues de la funcion ' + alumno)

// saludarAlumno('pedro')
// saludarAlumno('jorge')
// saludarAlumno('Cris')

function suma(num1,num2){
    return num1 + num2
}


// console.log(suma(2,2), 'esto debe devolver 4') /// 4
// console.log(suma(2,5))  // 7
// console.log(suma(6,3)) // 9
// console.log(suma(0,5)) // 5

// function puedoBeber(edad){
//     if(edad >= 18){
//         console.log(1)
//         return 'Si puedes beber'
//         console.log(2)
//     }else{
//         console.log(3)
//         return 'No puedes beber'
//         console.log(4)
//     }
// }

// console.log(puedoBeber("24"))
// console.log(puedoBeber(14))

function calculoIRPF(ingreso){
    return ingreso * 0.15
}



document.getElementById('impuesto').innerHTML = calculoIRPF(10000)




// console.log('ANTES se ejecuto window onload');
// window.onload = function() {

//     console.log('se ejecuto window onload');

// }
// console.log('DESPUES se ejecuto window onload');

// funcion declarativa
saludoDeclarativo()
function saludoDeclarativo(){
    console.log('Hola saludoDeclarativo')
}


// funcion de expresión
const saludExpresion = function(){
    console.log('Hola saludExpresion')
}
saludExpresion()

//funcion flecha
const saludoArrow = ()=> {
    console.log('Hola saludoArrow')
}
saludoArrow()

// PSEUDO CODIGO
// 1. modificar el html desde js
// 2. armnar una oracion a aprtir de un sujeto un verbo y etc
// 3. obetenr un el;emento aleatorio de who
// 4. obetenr un el;emento aleatorio de action
// 5. obetenr un el;emento aleatorio de what
// 6. obetenr un el;emento aleatorio de whn