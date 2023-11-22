
let lampImage = document.getElementById('image')

function ChangeImage() {
    if (lampImage.getAttribute('src') == 'img/lamp_off.png') {
        lampImage.setAttribute('src', 'img/lamp_on.png')
    }

    else {
        lampImage.setAttribute('src', 'img/lamp_off.png')
    }
}
