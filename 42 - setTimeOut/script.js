let userName = prompt("Enter your UserName : ")
let userPic;
if (userName) {
    alert("welcome , please upload your profile picture !")
    userPic = prompt("Upload Youe Profule Picture")
}
else {
    alert("Enter a Valid UserName")
}

setTimeout(() => {
    userPic ? alert("Well done") : alert("please login again ...")
}, 5000)