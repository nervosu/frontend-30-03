//1 задание
var starbucks = {
    coffee:{
    oleato:["Овсяный шейк", "Белая  Мокка", "Прянная Ваниль".toLowerCase],
    latte:["Латте", "Латте Охлажденный".toLowerCase],
    mokka:["Мокка","Мокка Охлажденный","Мокка Белый Шоколад","Мокка Белый Шоколад Охлаждённый".toLowerCase],
    makkiato:["Латте Маккиато","Карамель Маккиато","Карамель Маккиато охлаждённый","Охлажденное карамельное Облако Маккиато".toLowerCase],
    cappuccino:["Капучино".toLowerCase],
    americano:["Американо","Американо Охлаждённый".toLowerCase],   
    espresso:["Эспрессо","Эспрессо Маккиато","Эспрессо Кон Панна".toLowerCase],
    flatWhite:["Флэт Уайт".toLowerCase],
},
    tea:{
        hotTeaTeavana:["Черный Чай","Черный Чай Английский Завтрак","Зеленый Чай Императорский","Черный Чай Эрл Грей","Зеленый Чай Жасминовый Жемчуг".toLowerCase],
        latteTeaTeavana:["Маття Чай Латте","Пряный Чай Латте".toLowerCase],
        coldTeaTeavana:["Чёрный Чай охлажденный","Лимонад Черный Чай охлажденный","Зелёный Чай охлажденный","Лимонад Зеленый Чай охлажденный".toLowerCase],
        coldLatteTeavana:["Маття Чай Латте охлажденный","Пряный Чай Латте охлажденный".toLowerCase],
    }   

}
var select = prompt("coffee or tea?")
if (select in starbucks) {
    var drinkName = prompt("Введите название напитка:");
    if (drinkName in starbucks[select]) {
      alert("Вы заказали " + drinkName + ". ");
    } else {
      alert("Извините, такого напитка нет.");
    }
  } else {
    alert("Извините, такого типа напитка нет.");
  }
 
  


















// 2 задание
var cities = ["Bishkek", "Los Angeles", "Chicago",  "New York", "Houston", "Dallas", "Philadelphia", "Seattle"]

for (var i = 0; i < cities.length; i++){
    var text = cities[i]
    if(text.length <= 9)
    continue
    console.log(cities[i])
}



//3 задание
var number = Number(prompt ("Напишите число (1-7)"))
switch(number){
    case 1:
        alert("Понедельник")
        break
    case 2:
        alert("Вторник")
        break
    case 3:
        alert("Среда")
        break
    case 4:
         alert("Четверг")
        break
    case 5:
         alert("Пятница")
        break 
    case 6:
        alert("Суббота")
        break
    case 7:
         alert("Воскресенье")
        break
        default:
            alert("Такого дня нет")
    }
