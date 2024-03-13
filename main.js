console.log('hola Dom')

 let persona = {
    nombre: 'walter',
    apellido: 'rivero',
    edad: 12,
    skills:['js','python','react'],
    'lugar de nacimiento': 'sevilla',
    programar: function(){
        console.log('estoy programando')
    }
 }

 const arrayEjemplo = ['walter','rivero']

// Objeto perro  nombre, raza , ladrar wow

let perro = {
    nombre: "toby",
    raza: 'chihuahua',
    ladrar: function(){
        console.log('wow')
    }
}

// PSEUDO CODIGO
// Agregar un boton que cuando le doy click ejecuto una funcion que me cambia el titulo a nuevo titulo y el colro a rosa
// DONE - cambiar texto del titulo
//. DONE -  obtener el tag titulo
//. DONE -   cambiar el valor del titulo
//  DONE - cambiar el color de fondo
//.   DONE - obtener el tag titulo
//.    DONE - cambiar el estilo el fondo al color rosa
// DONE - agregar un boton a la vista
// DONE -cuando le doy click al boton debo ejecutar funcion
// DONE - tener una funcion que cmabio el color y el titulo 

function changeTitle(){
    console.log('changeTitle')
    let marioNames = ['Mario','Luigi','Bowser','Peach']
    let colores = ['red','blue','pink','green']
   
    let randomName =  marioNames[Math.floor( Math.random() *  marioNames.length)]
    let randomColor = colores[Math.floor( Math.random() * colores.length ) ]
    console.log(randomColor)
    document.getElementById('title').innerHTML = `hola ${randomName}`
    document.getElementById('title').style.backgroundColor = randomColor
}


document.getElementById('boton').addEventListener('click',changeTitle)



// PSEUDO CODIGO
// hacer un juego que cuadno le de click a un boton muestre el resultado de lanzar dos dados 
// DONE - obtener un numero aletorio del 1 al 6 para el dado 1
// DONE - obtener un numero aletorio del 1 al 6 para el dado 2
// DONE -crear una funcion que lacne los dados
// DONE -cuando le de click a un boton debo llamar la funcion
// DONE - agregar dados y boton a la vista
// estilizar hacer bonitos los dados
// DONE -asignar el valor aletorio al dado 1
// DONE -asignar el valor aletorio al dado 2


function throwDices(){
    document.getElementById('dice1').innerText = Math.floor((Math.random() *6) +1 )
    document.getElementById('dice2').innerText = Math.floor((Math.random() *6) +1 )
}

