const setBtn = document.querySelector(".btn-success");
const getBtn = document.querySelector(".btn-primary");
const delBtn = document.querySelector(".btn-warning");

let now = new Date();
now.setTime(now.getTime() + 400 * 24 * 60 * 60 * 1000);
setBtn.addEventListener("click", () => {
    document.cookie = `user=reza;path=/;expires=${now};`;
    document.cookie = `job=developer;path=/;expires=${now};`;
    document.cookie = `age=40;path=/;expires=${now};`;
});

getBtn.addEventListener("click", () => {
    const allCokies = document.cookie.split(";");
    const cookieGet = prompt("Enter name of cookie : ");
    let cokFind = allCokies.find((cok) => {
        return cok.includes(cookieGet);
    });
    let output = cokFind.substring(cokFind.indexOf("=") + 1);
    console.log(output);
});

delBtn.addEventListener("click", () => {
    let expireDate = new Date()
    expireDate.setTime(expireDate.getTime() - 10 * 24 * 60 * 60 * 1000);
    const delValue = prompt("Enter The Value to Remode : ");
    document.cookie = `${delValue}=r ;path=/;expires=${expireDate};`;
});
