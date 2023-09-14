// сортировка массива
var htmlTag = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1',  'p', 'h1', 'ol', 'br']
var tagCounter = {}
for( var i = 0; i < htmlTag.length; i++){
    if (tagCounter.hasOwnProperty(htmlTag[i])){
        tagCounter[htmlTag[i]] += 1
    }else{
        tagCounter[htmlTag[i]] = 1
    }
}
console.log(tagCounter);
// анонимные функции
console.log(Object.keys(tagCounter).sort(function(tag1, tag2) {
    return tagCounter[tag2 - tag1]
}))


// стрелочные функции 
var getPositionElement = (element, array) =>{
    for(var i = 0; i < array.length; i++){
        if(array[i] === element){
            return console.log(i);
    }else{
        } 
    }
    return console.log('404');
}
getPositionElement(5, [2, 3, 4, 5,])

var sayHello = () => console.log('hi');

sayHello()

//HOF- hide ordered function
var alertName =(funcName) =>{
    return funcName()
}
var windowName = () =>{
    // return alert('Alikhan')
}
//callback function
alertName(windowName)

function buttonClick  (){
    return console.log('click!');
}
var button = document.querySelector('button')
button.addEventListener('click', buttonClick)
//     console.log('click');
// })

var sumArray = (array) =>{
    var sum = 0
    for(var i = 0; i < array.length; i++){
        sum += array[i]

    }
    return console.log(sum);
}

sumArray ([2,4,5,7,8,4])

// переменная короткого обновления 

var i = 0
i = i + 1
i += 1 
i++

//DOM
console.dir(document)
console.dir(document.body)
console.dir(document.body.style)
console.dir(document.body.style.backgroundColor)
var text = document.getElementsByClassName('text')
console.log(text)
text[1].style.color = 'red'
text[0].innerHTML = 'frontend'