const inputRange = document.querySelector('input[type="range"]');

inputRange.addEventListener('change', (e) => {
    let value = e.target.value;
    console.log(value);
    document.body.style.filter = `brightness(${value}%)`;
})