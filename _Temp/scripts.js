





let listItems = document.querySelectorAll("li");

listItems.forEach(function (li) {
    li.addEventListener("pointerover", function (event) {
        console.log("pp");
        event.target.remove();
    })

})






