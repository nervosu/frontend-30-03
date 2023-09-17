// //dom
// var button = document.getElementById('btn')
// var btn = document.getElementsByTagName('button')
// //
// var divClass = document.querySelector('.block')
// var divAll = document.querySelectorAll('.block')
// var divID = document.querySelector('#box')
// //
// var button2 = document.querySelector('.clickBtn')
// button2.addEventListener('click', () => console.log('click'))

//add div
var wrapper = document.querySelector('.wrapper')
var newDiv = document.createElement('div')
newDiv.setAttribute('class', 'block')
wrapper.append(newDiv)

document.querySelector('.addDiv').onclick = () => {

}

//методы массива
//filter()
var fruits = ['apple','cherry','pineapple','banana','orange']
var filterFruits = fruits.filter((i)=> i.length > 6)
console.log(filterFruits)

var users = [
    {name:'Adam', age: 30},
    {name:'John', age: 12},
    {name:'Olive', age: 17},
    {name:'Nikita', age: 24},
    {name:'Aibek', age: 10},
    {name:'Jannat', age: 21},
    {name:'Erbol', age: 45},
    {name:'Alikhan', age: 9},
]
var result = users.filter(i => i.age <= 18)
console.log(result);

var result2 = users.filter(i =>i.name.toLowerCase().includes('a'))
console.log(result2);

//map
var numbers = [2, 3, 4, 5, 66, 55, 77, 65]
var newNumbers = numbers.map((num, index) => num * index)
console.log(newNumbers);

var soms = [230000, 456000, 789000, 1000000]
var dollar = soms.map(i => i / 88.3)
console.log(dollar);
var fixDollar = dollar.map(i => i.toFixed(2))
console.log(fixDollar);

var sorted = fixDollar.sort((n1, n2) => n2 - n1)
console.log(sorted);
//forEach
var numbers2 = [2, 34, 45, 56, 67]
numbers2.forEach ((num, index) => console.log(num * index))
console.log(numbers2)

var num2 = [23, 23, 34, 45, 45, 56, 67, 67, 78, 77, 77, 'qwer', 'qwer']
var numSet2 = new Set(num2)
var array = Array.from(numSet2)
console.log(array)

//ES6+
var hello = 'hello' //hoisting
console.log(hello);

let hello2 = 'hello'
console.log(hello2);

const arrayConst = []
arrayConst.push(2)
console.log(arrayConst);

// const fruits = [1, 'we', 33, 'ee']
// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i])
// }