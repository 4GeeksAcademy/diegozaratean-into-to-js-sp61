console.log('hola Dom')

 let persona = {
    nombre: 'walter',
    apellido: 'rivero',
    edad: 12,
    skills:['js','python','react'],
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
    document.getElementById('title').innerHTML = 'Nuevo titulo'
    document.getElementById('title').style.backgroundColor = 'pink'
}


document.getElementById('boton').addEventListener('click',changeTitle)








