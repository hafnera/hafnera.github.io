(function () {
    const template = document.createElement('template')
    template.innerHTML = `
      <style>
        /* CSS-Stile für das Widget */
        #root {
          width: 200px;
          height: 100px;
          background-color: #f0f0f0;
          border: 1px solid #ccc;
          padding: 10px;
          box-sizing: border-box;
        }
      </style>
      <div id="root">
        <!-- Inhalt des Widgets -->
        Hover over me!
      </div>
      `

    class CustomWidget extends HTMLElement {
        constructor() {
            super()

            // Schatten-DOM initialisieren und Template hinzufügen
            this._shadowRoot = this.attachShadow({ mode: 'open' })
            this._shadowRoot.appendChild(template.content.cloneNode(true))

            // Event-Listener für onMouseOver und onMouseOut hinzufügen
            const rootElement = this._shadowRoot.getElementById('root')
            rootElement.addEventListener('mouseover', this._handleMouseOver.bind(this))
            rootElement.addEventListener('mouseout', this._handleMouseOut.bind(this))
        }

        // Event-Handler für onMouseOver
        _handleMouseOver(event) {
            // Aktionen ausführen, wenn Maus über das Widget bewegt wird
            console.log('Mouse over the widget!')
            // Beispiel: Stiländerung bei Mouseover
            event.target.style.backgroundColor = '#ccc'
        }

        // Event-Handler für onMouseOut
        _handleMouseOut(event) {
            // Aktionen ausführen, wenn Maus das Widget verlässt
            console.log('Mouse out of the widget!')
            // Beispiel: Zurücksetzen der Stiländerung bei Mouseout
            event.target.style.backgroundColor = '#f0f0f0'
        }
    }

    customElements.define('custom-widget', CustomWidget)
})()
