//1 задание
let library = (...books) => {
    booksWithY=[]
    otherBooks= []
    for (let i of books){
        if(i.toLowerCase().includes('у')){
            booksWithY.push(i)
        }else{
            otherBooks.push(i)
        }   
    }
  console.log("Книги с буквой 'у'")
  for (let i of booksWithY) {
    console.log(i)
  }

  console.log("Остальные книги:")
  for (let i of otherBooks) {
    console.log(i)
  }
}

library( "пукп", "рдкерд", "апкуп", "учеба");
console.log(booksWithY);
console.log(otherBooks);

//2 задание

document.getElementById('add').addEventListener('click', function () {
  calculate('+');
});

document.getElementById('subtract').addEventListener('click', function () {
  calculate('-');
});

document.getElementById('multiply').addEventListener('click', function () {
  calculate('*');
});

document.getElementById('divide').addEventListener('click', function () {
  calculate('/');
});

document.getElementById('clear').addEventListener('click', function () {
  clearFields();
});

document.getElementById('calculate').addEventListener('click', function () {
  calculate('=');
});

function calculate(operation) {
  let num1 = parseFloat(document.getElementById('num1').value);
  let num2 = parseFloat(document.getElementById('num2').value);
  let resultField = document.getElementById('result');
  
  if (isNaN(num1) || isNaN(num2)) {
      resultField.value = 'Ошибка';
      resultField.style.color = 'red';
  } else {
      let result;
      switch (operation) {
          case '+':
              result = num1 + num2;
              break;
          case '-':
              result = num1 - num2;
              break;
          case '*':
              result = num1 * num2;
              break;
          case '/':
              result = num1 / num2;
              break;
          case '=':
              result = num1;
              break;
          default:
              result = 'Недопустимая операция';
              if (num2 === 0) {
                resultField.value = 'Ошибка';
                resultField.style.color = 'red';
                return;
            }
      }

      resultField.value = result;
      resultField.style.color = 'black';
  }
}

function clearFields() {
  document.getElementById('num1').value = '';
  document.getElementById('num2').value = '';
  document.getElementById('result').value = '';
}
