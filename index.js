const readline = require(`readline`)


console.log('hello world')


const firstName = 'moira';
// console.log(firstName)

const lastName = 'leon'
//console.log(firstName + lastName)
console.log(`${firstName} ${lastName`)

let age = 24;

console.log(age+10)

let height;// undefined
let weight = null
console.log(heught)

let xNum = 4;
let yNum = 10;

const = sum = xNum + yNum;

console.log(sum)

const amHungry = true;

if (amHungry) {
    console.log(`feed me already!`)
} else {
    console.log(`no thanks I ate already')
}

const reader = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
)
reader.question("What is your favorite color?", function (userAnswer){
console.log(`your answer was ${serAnswer}`)
})
