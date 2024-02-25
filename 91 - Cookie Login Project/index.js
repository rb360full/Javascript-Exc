
function getCookie(param) {
    let allCookies = document.cookie.split(";");
    let user = allCookies.find((cok) => {
        return cok.includes(param);
    });
    return user ? user.split('=')[1] : null
    return user.substring(user.indexOf("=") + 1);
}

console.log(getCookie('user'));



window.addEventListener("load", () => {


    console.log(getCookie('user'));

    if (!getCookie("user")) {
        console.log('not login');
        location.href = 'http://localhost/Javascript-Exc/91%20-%20Cookie%20Login%20Project/login.html'
    }
    else {
        console.log('loged in');
    }
});