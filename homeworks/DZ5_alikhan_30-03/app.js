// 1 задание
let wrapper = document.querySelector('.wrapper')
let element = document.createElement('div')
let button = document.querySelector('.button')
wrapper.append(element)
button.addEventListener('click', () =>{
    let select = prompt('Введите текст который нужно добавить')
    if(select !== ''){
    }else
    alert('error')
    element.textContent = select
})

//2 задание
const array = ['frontend', 3, 34, 45, null, undefined, null, 45, 'text', 'text', true, false, 23, null, 'qwerty', 456]
const allArray = {}
array.forEach(function(i) {
    const type = typeof i
    allArray[type] = allArray[type] || []
    allArray[type].push(i)
});
const sortedArrays = Object.values(allArray).sort((a, b) => b.length - a.length)
const filteredArrays = sortedArrays.map(arr => {
    return arr.filter(i => {
        if (typeof i === 'string') {
            return i.length > 3
        }
        if (typeof i === 'number') {
            return i.toString().length > 3;
        }
        return true
    })
})
filteredArrays.forEach(arr => {
    console.log(arr)
})
