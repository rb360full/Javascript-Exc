let template = document.createElement("template");

template.innerHTML = `
<h1>Reza ❤️❤️</h1>
<h1>Reza ❤️❤️</h1>
<h1>Reza ❤️❤️</h1>
<h1>Reza ❤️❤️</h1>
<link rel="stylesheet" href="components/user-site/user-Site.css">
`

class UserSite extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

export { UserSite }






// site-user.js
// class UserSite extends HTMLElement {
//     constructor() {
//         super();
//         this.attachShadow({ mode: "open" });
//         this.fetchAndRenderTemplate();
//     }

//     fetchAndRenderTemplate() {
//         let template = document.createElement("template");
//         fetch("site-user.html")
//             .then(res => res.text())
//             .then(data => {
//                 template.innerHTML = data;
//                 this.shadowRoot.appendChild(template.content.cloneNode(true));
//             })
//             .catch(error => {
//                 console.error('Error:', error);
//             });
//     }
// }

// window.customElements.define("site-user", UserSite);
