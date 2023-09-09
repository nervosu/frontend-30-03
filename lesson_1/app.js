console.log('Hello world');
//Переменная
var name = 'Alikhan'
//CamelCase
var nameAndSurname = 'Alikhan Dzhamalov'
console.log(name + ' ' + nameAndSurname) //конкатенация
console.log(name, nameAndSurname)//конкатенация

//Типы данных
//1) string
var name2 = 'Aliya'
console.log(typeof name2)
console.log(name2.toUpperCase())
console.log(name2.toLowerCase())
console.log(name2.repeat(45))
//2)number
var number = 56
var number2 = 2
console.log(number.toString())
console.log(number + number2)
console.log('Средний возраст группы 30/3 ->',)
//3)booLean
//операторы сравнения <, >, <=, =>, ==, ===, !=, !==
var num1 = 78
var num2 = '78'
console.log(num1 === num2)
// Условные конструкции if, else..if, else
var login = prompt('enter login-')
var password = prompt('enter password -')
var login2 = prompt ('enter your login')
var password2 = prompt('enter your password -')
if(login === login2 && password === password2){
    alert('ok')
}else{
    console.error('error')
}   
//&&, || - логические операторы

var userName = prompt('name')
var userSurname = prompt('surname')
var userAge = prompt('age')
if(userAge<=18){
    console.log('Привет', userSurname)
}else if(userAge =>19 && userAge <=60){
    console.log('Здравствуйте', userSurname + ' ' + userName)
}else if(userAge =>61 && userAge <=80){
    console.log('Добро пожаловать', userSurname + ' ' + userName)
}else{
    console.log('введите корректный возраст (от 1 до 80)')
}

