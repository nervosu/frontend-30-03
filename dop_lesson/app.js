let num = 12
let str = '44'
let boolean = true; false
let arr = [1,'3', undefined]
let obj = {
    name: 'alikhan',
    age:19,
    isStudent: false,
}
let bigInt = 
    151512515315135135

    function greet(name) {
        console.log(`Привет, ${name}`);
        
    }
greet('alikhan');
function add(a,b) {
    return a + b    
}
const sum = add(3,5)
console.log(sum);

const mlt = (x,y) => {return x*y}

console.log(mlt(5,4));

function fetchData(url, callback) {
    setTimeout(() => {
        const data = {
            id: 1,
            name: 'John'
        }
        callback(data)
    }, 1000)
}
function displayData(data) {
    console.log(data);
}
for(let i = 0; i<30; i++){
    
}


































