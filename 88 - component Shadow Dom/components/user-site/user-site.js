let template = document.createElement("template");

template.innerHTML = `
<link rel="stylesheet" href="components/user-site/user-Site.css">
 <slot name='username'></slot>
<h1></h1>
<slot name='email'></slot>
<slot name='job'></slot>
<slot class="pc" name='pc'></slot>
<slot name="remove"></slot>

`;

class UserSite extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    removeComponent() {
        this.remove();
    }

    connectedCallback() {
        let removeBtn = this.shadowRoot.querySelectorAll("slot")[4];
        let userSiteElement = this.shadowRoot.querySelector('h1')
        userSiteElement.innerHTML = this.getAttribute('user-site')

        removeBtn.addEventListener("click", () => {
            this.removeComponent();
        });
    }

    disconnectedCallback() {
        let removeBtn = this.shadowRoot.querySelectorAll("slot")[4];
        removeBtn.removeEventListener("click", () => {
            this.removeComponent();
        });
    }


    static observedAttributes() {

        return ['user-site']

    }
}

export { UserSite };

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
