let template = document.createElement("template");

template.innerHTML = `
    <h2>Reza ❤️</h2>
    <h2>Reza ❤️</h2>
    <h2>Reza ❤️</h2>
    <h2>Reza2 ❤️</h2>
    <link rel="stylesheet" href="user-Site.css">
`;

class UserSite extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

window.customElements.define("site-user", UserSite);


