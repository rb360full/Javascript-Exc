

function getCookie(param) {
    let allCookies = document.cookie.split(";");
    let user = allCookies.find((cok) => {
        return cok.includes(param);
    });
    return user.split('=')[1]
    return user.substring(user.indexOf("=") + 1);
}


console.log(getCookie('user'));


window.addEventListener("load", () => {
    alert('welcome')
    if (!getCookie("user")) {
        console.log('not login');
        location.href = 'http://google.com'
    }
    else{
        console.log('loged in');
    }
});