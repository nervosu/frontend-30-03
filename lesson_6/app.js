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
//for..of
var