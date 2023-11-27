let locationElem = document.getElementById('location')
let titleElem = document.querySelector('title')
let keyCodeElem = document.getElementById('keyCode')
let keyElem = document.getElementById('key')
let whichElem = document.getElementById('which')
let codeElem = document.getElementById('code')


document.body.addEventListener('keydown', function (event) {
	event.preventDefault();
	starter.style.display = 'none'
	heading.style.display = 'flex'
	ascii.style.display = 'flex'
	infos.style.display = 'flex'
	keyCodeElem.innerHTML = event.keyCode
	keyElem.innerHTML = event.key
	locationElem.innerHTML= event.location
	whichElem.innerHTML= event.which
	codeElem.innerHTML= event.code


})