var month = parseInt(prompt('Введите месяц рождения'))
var day = parseInt(prompt('Введите день рождения'))
if ((month >= 1 && month <=12) || (day >=1 && day <= 31)){
    var zodiac = ''

if((month === 3 && day >= 21) || (month === 4 && day <=20)){
    zodiac = 'Овен'
}else if((month === 4 && day >=21) || (month === 5 && day <=20)){
    zodiac = 'Телец'
}else if ((month === 5 && day >=21) || (month === 6 && day <=21)){
    zodiac = 'Близнецы'
}else if ((month === 6 && day >=22) || (month === 7 && day <=22)){
    zodiac = 'Рак'
}else if ((month === 7 && day >=23) || (month === 8 && day <=23)){
    zodiac = 'Лев'
}else if ((month === 8 && day >=24) || (month === 9 && day <=23)){
    zodiac = 'Дева'
}else if ((month === 9 && day >=24) || (month === 10 && day <=23)){
    zodiac = 'Весы'
}else if ((month === 10 && day >=24) || (month === 11 && day <=22)){
    zodiac = 'Скорпион'
}else if ((month === 11 && day >=23) || (month === 12 && day <=21)){
    zodiac = 'Стрелец'
}else if ((month === 12 && day >=22) || (month === 1 && day <=20)){
    zodiac = 'Козерог'
}else if ((month === 1 && day >=21) || (month === 2 && day <=20)){
    zodiac = 'Водолей'
}else if ((month === 2 && day >=21) || (month === 3 && day <=20)){
    zodiac = 'Рыбы'   
}
               
if (zodiac !== '') {
    alert('Ваш знак зодиака - ' + zodiac)
} else {
    console.error('Неверные данные о дне и месяце рождения.')
  }
} else {
console.error('Неверный месяц или день рождения.')
}





