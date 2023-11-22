
let lampImage = document.getElementById('image')
let lampFlag = false
function ChangeImage() {
    if (lampFlag) {
        lampImage.setAttribute('src', 'img/lamp_off.png')
        lampFlag = false
    }

    else {
        lampImage.setAttribute('src', 'img/lamp_on.png')
        lampFlag = true
    }
}
