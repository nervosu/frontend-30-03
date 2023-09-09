// while
var i = 0
while(i <= 10){
    i++
    console.log(i);
    
}

var fruits = ['banana','orange','pineapple','raspberry']
var fruitForFound = 'pineapple'
var i = 0
while(i < fruits.length){
    if(fruits[i] === fruitForFound) console.log(`fruit found on index ${i}`);
    i++
}
//for..of []
var numbers = [1, 2, 3, 4, 5, 6]
for(var i of numbers){
    console.log(i);
}

// for..in {}

var human = {
    name:"Alikhan",
    surname:"Dzhamalov",
    age: 17,
    isMarried: false,
    address: {
        city: "Tokmok",
        street: null
    },
    g:undefined
}

for(var key in human){
    console.log(key);
    console.log(human[key]);
    console.log(` key - ${key}, value - ${human[key]}`);
}   
                                                                                                                                                                                                                                                                                                                                                                                                                                            
// методы массива                                                                                                                                                                                                                               

var fruits = ['banana','pineapple','raspberry']
fruits.push('apple', 'lemon') // добавляет с конца
var firstFruit = fruits .shift()// вытаскивает с начала
var fruitAdd = fruits.unshift('banana')//добавляет в начало
var fruit2 = fruits.pop()// вытаскивает с конца
fruits.splice(0, 2) // индекс начала  и кол-во удалений
fruits.splice(0,2,'b')// удаление добавление
console.log(fruits)
console.log(firstFruit);
console.log(fruitAdd);
//функции
//function-declaration
function sayHello () {
    console.log("hello world");    
}
sayHello()

//function-expression
var strLog = function () {
    console.log("gdrgdgdgdg");
}
strLog()

const getMax = function (n1, n2) {
    console.log(n1 > n2 ? n1:n2);
}
getMax(6, 8 )