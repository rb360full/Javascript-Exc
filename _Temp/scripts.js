const grid = document.getElementById('grid');
const cells = document.querySelectorAll('.cell');


let arr = [[], [], []]
let k = 0
for (let i = 0; i < 3; i++) {

    for (let j = k; j < k + 3; j++) {

        arr[i].push(cells[j].innerHTML);

    }
    k = k + 3
}




for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {

        let count = 0
        if (!arr[i][j]) {
            count++
            arr[i][j] = count
            let finded = arr[i].find(x => x == count)
            console.log(finded);

            if (!finded || finded == count) {





                break
            }
        }


    }
}




console.log(arr);
