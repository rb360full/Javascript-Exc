window.addEventListener("load", (e) => {
    console.log(navigator.userAgent);

    if (navigator.userAgent) {
        let browser =
            (navigator.userAgent.match(/edge/i) && "edge") ||
            (navigator.userAgent.match(/firefox/i) && "firefox") ||
            (navigator.userAgent.match(/opera/i) && "opera") ||
            (navigator.userAgent.match(/chrome/i) && "chrome") ||
            (navigator.userAgent.match(/safari/i) && "safari");

        getAgentName(browser)
    } else {
        alert('your browser not support UserAgent ...')
    }
});

function getAgentName(browserName) {
    let browserElem = document.querySelector(`img.${browserName}`);
    browserElem.style.opacity = "1";
}
