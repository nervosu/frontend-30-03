var inputClass = document.querySelector('.inputClass')
var plus = document.querySelector('.plus')
plus.addEventListener('click', function (){
    inputClass.value = Number(inputClass.value) + 1
})
var minus = document.querySelector('.minus')
minus.addEventListener('click', function (){
    inputClass.value = Number(inputClass.value) - 1
})



var newArray = (array, operation) =>{
    var result = []
    for(var i = 0; i < array.length; i ++){
        result.push(operation(array[i]))
    }
    return result
}
function multiplication(x) {
    return x * 2 
} 
var myArray = [1,2,3,4,5]

var resultMultiplication = newArray(myArray, multiplication);
console.log(resultMultiplication);
