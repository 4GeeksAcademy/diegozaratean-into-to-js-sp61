console.log('Loops y Arrays')

// Array : Mario Luigi Bowser Toad Peach
let personajesMario = ['Mario','Luigi','Bowser','Toad','Peach']



let personajesBuenos = []
for(let i =  0 ; i < personajesMario.length ; i++){
    console.log(personajesMario[i])
    if(personajesMario[i] != 'Bowser'){
        // copiar
        personajesBuenos.push(personajesMario[i])
    }
}

console.log(personajesMario)
console.log(personajesBuenos)

let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

console.log('Con FILTER')
console.log(personajesMario.filter( (element)=> element != 'Bowser' ))
console.log(personajesMario.filter( (personaje)=> personaje != 'Bowser' ))

console.log(numbers.filter( (number)=> number > 7 ))
console.log(numbers.filter( (number)=> number > 7 && number <= 15  ))
console.log(numbers.filter( (number)=> number%3 == 0 ))


console.log(numbers)
let newnumbers = []
for(i = 0; i < numbers.length; i++){
    newnumbers.push(numbers[i] * 4)
}

console.log(newnumbers)


console.log('CON MAP')
console.log(numbers.map( x => x * 4 ))
console.log(  personajesMario.map( j => j + 's'  ) )

personajesBuenos.forEach( (item) => {
    console.log(item)
})

console.log('Do While')
let j = 20
do {
    console.log(j)
    j++
}while( j < 10)
// console.log(personajesMario[0])
// console.log(personajesMario[1])
// console.log(personajesMario[2])
// console.log(personajesMario[3])
// console.log(personajesMario[4])


// i++. => i = i + 1
// for(incializacion;condicion;acutalizacion)
// i = 6 ;  > 0
// for(let i = personajesMario.length - 1 ; i >= 0 ; i--){
//     console.log(personajesMario[i])
// }

// 0 1 2 3 4 
// 4 3 2 1 0

// console.log(numbers)
// // 0 1 2 3 4 5 6 7 8 9 .. 19.  20 veces
// for(let i = 0; i < numbers.length;i++){
//     console.log('me estoy ejecutando',i)
//     if(i %3 === 0){
//         console.log('el valor de i',i)
//         console.log('el valor de number ',numbers[i])
//     }
// }

// // 0 3 6 9 12 15 18  7 veces
// for(let i = 0; i < numbers.length;i = i + 3){
//     console.log('me estoy ejecutando',i)
//     console.log('el valor de i',i)
//     console.log('el valor de number ',numbers[i])
// }

// i+5 ==> 
// i++. => i = i + 1
// 30 35 40 45 50 
// for(i = 30; i <= 50 ; i+=5){
//     console.log(i)
// }