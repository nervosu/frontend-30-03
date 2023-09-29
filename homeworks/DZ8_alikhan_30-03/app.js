function isPalindrome(str) {
    str = str.replace(/ /g, '').toLowerCase();
    return str === str.split('').reverse().join('');
}
const inputString = prompt("Введите строку: ");
const result = isPalindrome(inputString);
console.log(result ? "Это палиндром" : "Это не палиндром");
