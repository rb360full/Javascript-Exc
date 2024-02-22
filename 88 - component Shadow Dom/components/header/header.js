let template = document.createElement('template')

template.innerHTML = `
<link rel="stylesheet" href="components/header/header.css">
<h1>HEADER SITE</h1>
`


class Header extends HTMLElement {
    constructor() {
        super()

        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}

export { Header }