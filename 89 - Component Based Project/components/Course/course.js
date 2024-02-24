class Course extends HTMLElement {
    constructor() {
        super()
        this.fetchApplyTemplate()
    }

    async fetchApplyTemplate() {
        await fetch('components/course/course.html').then(res => res.text())
            .then(html => {

                const template = document.createElement('template')
                template.innerHTML = html
                this.attachShadow({ mode: 'open' })
                this.shadowRoot.appendChild(template.content.cloneNode(true))
                this.shadowRoot.querySelector('.course-title').innerHTML = this.getAttribute('course-title')
                this.shadowRoot.querySelector('.course-desc').innerHTML = this.getAttribute('course-desc')
            })
    }
    connectedCallback() {

    }

    observedAttributes() {
        return ['course-title', 'course-desc']
    }


}



export { Course }