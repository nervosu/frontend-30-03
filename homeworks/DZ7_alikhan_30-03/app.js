
let buttons = document.querySelectorAll('button');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {  
        let riddle = this.parentElement;
        riddle.classList.toggle('show-answer');
        if (riddle.classList.contains('show-answer')) {
            this.textContent = 'Скрыть ответ';
        } else {
            this.textContent = 'Ответ';
        }
    });
}
