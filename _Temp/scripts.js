let reactElem = document.getElementById('react')
let vueElem = document.getElementById('vue')
let boxElem = document.getElementById('box')

reactElem.addEventListener('dragstart', DragHandler)
vueElem.addEventListener('dragstart', DragHandler)
boxElem.addEventListener('drop', DropHandler)
boxElem.addEventListener('dragover', DragoverHandler)



function DragHandler(event) {
    let elemId = event.target.id;
    event.dataTransfer.setData('elemId', elemId)
}


function DropHandler(event) {
    let elemId = event.dataTransfer.getData('elemId')
    let elem = document.getElementById(elemId)
    let dropElem = document.getElementById(event.target.id)
    dropElem.append(elem)
}

function DragoverHandler (event){
    event.preventDefault()
}