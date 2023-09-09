// var day = Number(prompt('enter day -'))
// var month = Number(prompt('enter month -'))
// if(day >=21 && day <=31 && month === 'март' || day <=21 && month === 'Апрель'){
//    console.log('Овен')
// }else{
//    console.error()
// }
// var userINN = '10909200000768'
// var firstNum = Number(userINN[0])
// if((firstNum === 0 || firstNum === 1 || firstNum === 2) && userINN.length === 14){
//    console.log('инн прошел проверку')
// }else{
//    console.log('error');
// }
// 4)ubdefined
let name;
console.log(typeof name);
//5)null
let nothing = null
console.log(typeof nothing);
//NaN
var nan = 78 * '543t'
console.log(nan);
//switch..case
var size = 'm'
if(size === 'm'){
    console.log('44');
}else if (size === 's'){
    console.log('40')
}else if (size === 'l'){
    console.log('46');
}else{
    console.log('unknown size')
}
//
switch(size){
    case 's':
        console.log('40');   
        break
    case 'm':
        console.log('44');
        break
    case 'l':
        console.log('46');
        break
         default:
        console.log('unknown size'); 
}                       
//6)object
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
console.log(human);
console.log(human.name);
console.log(human.address.street);
//Методы
human.course = 'Geeks' // Добавление
console.log(human);
delete human.age // Удаление
console.log(human);
human['isMarried'] = true // Изменение
console.log(human);

console.log(Object.values(human)); // просмотр значений 
console.log(Object.keys(human)); // просмотр ключей
console.log(Object.entries(human));// просмотр ключ значение
console.log(human.has(OwnProperty('name')); // проверка 
//array 
var array = ['a', 'b', 'gregg', 'd', 90]
console.log(array[4]);

// Переоперделение переменных 
var num = 10
num = 'qwerty'
console.log(num);
// Циклы
//for
/*
var i = 0
var i = i + 1
var i += 1
var i++
**/
for(var i = 0; i <=10; i++){
    console.log(i);
}
for(var i = 0; i< names.length; i++){
    if(blacklist.includes(names[i].toLowerCase())){}
        console.warn(`${names[i]} in blacklist`)
        continue
}
    console.log(`welcome,dear guest ${names[i]}`)