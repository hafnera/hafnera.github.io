(function () {
    const template = document.createElement('template')
    template.innerHTML = `
      <div id="root">
        <!-- Widget content -->
        <h2>Title</h2>
        <div id="content"></div>
      </div>
    `

    class CustomWidget extends HTMLElement {
        constructor() {
            super()

            // Initialize shadow DOM and add template
            this._shadowRoot = this.attachShadow({ mode: 'open' })
            this._shadowRoot.appendChild(template.content.cloneNode(true))

            // Initialize empty data object
            this._data = {}

            // Bind method context
            this.setData = this.setData.bind(this)
        }

        // Method to set data in the widget
        setData(data) {
            // Update internal data
            this._data = data

            // Update displayed content
            const contentElement = this._shadowRoot.getElementById('content')
            contentElement.innerHTML = JSON.stringify(data)
        }
    }

    // Define custom element and register it
    customElements.define('custom-widget-2', CustomWidget)
})()
