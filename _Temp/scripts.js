

let addCdnLink = (cdn) => {
    let newLinkTag = document.createElement("link");
    newLinkTag.href = cdn;
    newLinkTag.rel = "stylesheet";
    document.head.appendChild(newLinkTag);

    return new Promise((resolved, reject) => {
        newLinkTag.onload = () => resolved("File Attached");
        newLinkTag.onerror = () => reject("File Not Attached");
    });
};




console.log(addCdnLink('style.css'));

// addCdnLink("style.css")
//     .then((message) => console.log(message))
//     .catch((message) => console.log(message));



