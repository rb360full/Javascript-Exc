const box = document.querySelector('div')
const input = document.querySelector('input')

const button = document.querySelector('button[type="submit"]')





button.onclick = () => {
    try {
        if (input.value.length > 5) {

            throw "greater than 5"
        } else if(input.value.length < 2){
            throw 'less than 2'
        }

    } catch (err) {
        console.error(err);


    } finally {
        console.log('done');

    }
}






