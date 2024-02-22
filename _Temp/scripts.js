class SiteUser extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `<h1>Hello World</h1>
        <style>
         h1 {
            padding: 10px;
            color: green;
            }
        </style>
        `
    }
}

window.customElements.define('site-user', SiteUser)

