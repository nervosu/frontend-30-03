const dragAndDrop = () =>{
    const card = document.querySelector('.list__card')
    const cells = document.querySelectorAll('.list__cell')
    const dragStart = function () {
     setTimeout(() => {
        this.classList.add('hide')   
     }, 0);
    }
    const dragEnd = function () {
        this.classList.remove('hide')
    }
    const dragEnter = function () {
        this.classList.add('hovered')
    }
    const dragOver = function (event) {
       event.preventDefault()
    }
    const dragLeave = function () {
        this.classList.remove('hovered')
    }
    const dragDrop = function () {
        this.append(card)
        this.classList.add('hovered')
    }
    card.addEventListener('dragstart', dragStart)
    card.addEventListener('dragend', dragEnd)
    cells.forEach((cells) => {
        cells.addEventListener('dragenter', dragEnter)
        cells.addEventListener('dragover', dragOver)
        cells.addEventListener('dragleave', dragLeave)
        cells.addEventListener('drop', dragDrop)
    });
}
dragAndDrop()