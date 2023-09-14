// 1 задание
var numbers = [123, 234, 256, 345, 456, 567, 543, 67, 55, 23, 28, 50]
var newArray = []
for(var i of numbers){
    var numFor = Number(i.toString()[0])
    if (numFor === 2 || numFor === 5) 
        newArray.push(i)
        console.log(newArray)
}

//2 задание 

function printMessage() {
    console.log("Print Message");   
}
console.log(typeof printMessage);

//3 задание

var tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br'];

var tagCounts = {};

for (let i = 0; i < tags.length; i++) {
  var tag = tags[i];
  if (tagCounts[tag]) {
    tagCounts[tag] += 1;
  } else {
    tagCounts[tag] = 1;
  }
}

console.log(tagCounts);
