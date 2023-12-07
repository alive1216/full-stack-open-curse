//Funcion con dos parametros que retorna la suma de estos
const sum = (p1, p2) =>{
    console.log(p1)
    console.log(p2)
    return p1+p2
}

const result = sum(15,23)
console.log(result)

//Funcion con un solo parametro

const square = p => {
    console.log(p)
    return p*p
}
const result2 = square(9)
console.log(result2)

//Funcion con un solo parametro y sin llaves

const square2 = p => p*p
const t = [5,7,9]
const tSquared = t.map(p => p*p)
console.log(tSquared)

//Funciones antes de ES6

function sum2(p1, p2){
    return p1+p2
}
const result3 = sum2(20,71)

//Funcion usando una expresion de funcion
const average = function(p1, p2){
    return (p1+p2)/2
}
const result4 = average(26,17)

//METODO Y OBJETO THIS

const arto ={
    name: "Alison Velastegui",
    age: 23,
    education: "Software Engineer",
    greet: function(){
        console.log('\n Hola my nombre es '+ this.name)
    },
    doAddition: function(a,b){
        console.log(a+b)
    }
}
arto.greet()

//Asignar a los objetos incluso después de la creación del objeto
 arto.growOlder = function(){
    this.age += 1
 }
console.log('\n'+arto.age)
arto.growOlder()
console.log(arto.age)

console.log('\n Do addition')
arto.doAddition(15,7)
const referenceToAdittion = arto.doAddition
referenceToAdittion(62,41)

//Perdida de this
console.log('\n Perdida de this')
arto.greet()       

const referenceToGreet = arto.greet
referenceToGreet() 
//Obligar a apuntar al this donde sea que este
setTimeout(arto.greet.bind(arto), 1000)

//CLASES
class Person {
    constructor(name, age){
        this.name = name
        this.age = age
    }
    greet(){
        console.log('Hola mi nombre es'+ this.name)
    }
}
console.log('\n Clases')
const adam = new Person(' Adam Ondra', 35)
adam.greet()
const janja = new Person(' Janja Garnbret', 22)
janja.greet()