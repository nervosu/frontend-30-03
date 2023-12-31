const arr = ['frontend', 3, 34, 45, null, undefined, null, 45, 'text', 'text', true, false, 23, null, 'qwerty', 456]

const objectTypes = arr.reduce((acc, currentElement)=> {
    const current = typeof currentElement
    if(!acc[current]){
        acc[current] = []
    }
    acc[current].push(currentElement)
    return acc;
}, [])
console.log((objectTypes));
const arrayTypes = Object.values(objectTypes)
const arrSortedByLength = arrayTypes.sort((a, b) => b.length - a.length)
function filteredByLength (arr, minLength) {
    return arr.filter(elem => `${elem}`.length > minLength)
}
const filterArr = arrSortedByLength.map(arr => filteredByLength(arr, 3))
console.log(filterArr);




// замыкание

function createPlayer(name){
    let score = 0
    return function scoreCount(){
        score++
        return`${name} - ${score} баллов`
    }
}
const playerOne = createPlayer('Jack')
const playerTwo = createPlayer('Alice')


//rest- параметры
function getAllSum(...num) {
    let sum = num.reduce((n1, n2)=>n1+=n2)
    console.log(sum);
}
getAllSum(3, 4 ,3)


function convertUSD (usd, ...soms) {
    console.log(usd, soms);
    return soms.map(som => som / usd)
}

console.log(convertUSD(89,234000,3450000))

const number1 = [1,2,3]
const number2 = [3,53,8]
const newArray = [...number1, ...number2]
console.log(newArray);

// //default-params
const array = [1, 2, 3]
const newArr = array.join()
console.log(newArr)

function pushJoin (array, separator = ',') {
    let result = ''
    for(let i = 0; i< array.length; i++){
        result += array[i] + (i === array.length - 1 ? '':separator)
    }
    return result    
}

console.log(pushJoin([1,2,3,4,5], '-'));


const input = document.querySelector('#input')
const createButton = document.querySelector('#create_button')
const todoList = document.querySelector('#todo_list')

const createTodo = () => {
    if(input.value.trim() === ''){
        return alert('нельзя вводить пустоту или пробелы')
    }

//    1
    const div = document.createElement('div')
    const divButtons = document.createElement('div')
    const deleteButton = document.createElement('button')
    const editButton = document.createElement('button')
    const text = document.createElement('h3')
//    2
    div.setAttribute('class', 'block_text')
    divButtons.setAttribute('class', 'div_button')
    deleteButton.setAttribute('class', 'delete_button')
    editButton.setAttribute('class', 'edit_button')

    deleteButton.innerText = 'delete'
    editButton.innerText = 'edit'
    deleteButton.onclick = () => div.remove()
    editButton.onclick = () => {
        const editText = prompt(`EDITED: ${text}`).trim()
        editText === '' ? alert('нельзя вводить пустоту') : text.innerText = editText
    }
    text.innerText = input.value
    divButtons.append(deleteButton, editButton)
    div.append(text, divButtons)
    todoList.prepend(div)
    input.value = ''
    text.addEventListener('click', () => {
        text.classList.toggle('toggle')
    })

}
createButton.onclick = ()=> createTodo()
window.onkeydown = () =>{
    if(event.code === 'Enter')
        createTodo()
    
}
