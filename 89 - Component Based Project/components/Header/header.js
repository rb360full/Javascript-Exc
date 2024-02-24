let template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="components/Header/header.css">
<div class="header-container">
    <h1 class=header-title></h1>
</div>
`;

class Header extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        let headerTitle = this.shadowRoot.querySelector(".header-title");
        headerTitle.innerHTML = this.getAttribute("header-title");
    }

    observedAttributes() {
        return ["header-title"];
    }
}

export { Header };
