class Header extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.fetchAndApplyTemplate();
    }

    fetchAndApplyTemplate() {
        fetch('components/Header/header.html').then(response => response.text())
            .then(html => {
                const template = document.createElement("template");
                template.innerHTML = html;
                this.shadowRoot.appendChild(template.content.cloneNode(true));
                this.connectedCallback();

            })
    }

    connectedCallback() {
        let headerTitle = this.shadowRoot.querySelector(".header-title");
        headerTitle.innerHTML = this.getAttribute("header-title");
        this.shadowRoot.querySelector('.header-desc').innerHTML = this.getAttribute('header-desc');
    }

    static get observedAttributes() {
        return ["header-title", 'header-desc'];
    }
}


export { Header };
