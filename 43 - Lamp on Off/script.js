
let lampImage = document.getElementById('image')
let lampFlag = false
let lampButton = document.querySelector('button')
function ChangeImage() {
    if (lampFlag) {
        lampImage.setAttribute('src', 'img/lamp_off.png')
        lampFlag = false
        lampButton.innerText = 'Turn On'
        lampButton.classList.add('btn-warning')
        lampButton.classList.remove('btn-dark')
       

    }

    else {
        lampImage.setAttribute('src', 'img/lamp_on.png')
        lampFlag = true
        lampButton.innerText = 'Turn Off'
        lampButton.classList.remove('btn-warning')
        lampButton.classList.add('btn-dark')
       
    }
}




