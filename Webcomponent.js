(function () {
    let tmpl = document.createElement('template');
    tmpl.innerHTML =
        `
        <style>
        /* CSS styles for the widget */
    
        #content {
            position: absolute;
            top: 10px;
            left: 10px;
            right: 10px;
            bottom: 10px;
            background-color: rgba(255, 255, 255, 0.5);
            -webkit-backdrop-filter: blur(10px);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.25);
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        }
        </style>
        
        <body>
            <div id="root">
                <div id="content">
                    <!-- Widget content -->
                </div>
            </div>
        </body>
       `;

    class PerformanceHelp extends HTMLElement {
        constructor() {
            super();
            this.init();
        }

        init() {
            // Erstelle die Schattenwurzel und füge das Template hinzu
            this._shadowRoot = this.attachShadow({ mode: 'open' });
            this._shadowRoot.appendChild(tmpl.content.cloneNode(true));

            // Füge Event-Listener für das Resize-Ereignis hinzu
            window.addEventListener('resize', this.onResize.bind(this));
            this.onResize();
        }

        // neu
        onCustomWidgetBeforeUpdate(changedProperties) {
            this._props = { ...this._props, ...changedProperties };
        }

        // neu
        onCustomWidgetAfterUpdate(changedProperties) {
            // Apply the new properties to the widget
            console.log('AfterUpdate() called');

            if ("backgroundColor" in changedProperties) {
                this._updateBackgroundColor(changedProperties.backgroundColor);
            }
            if ("borderColor" in changedProperties) {
                this._updateBorderColor(changedProperties.borderColor);
            }

        }

        // neu
        _updateBackgroundColor(color) {
            const widget = this._shadowRoot.querySelector('#content');
            widget.style.backgroundColor = color;
        }

        _updateBorderColor(color) {
            const widget = this._shadowRoot.querySelector('#content');
            widget.style.borderColor = color;
        }



        onResize() {
            console.log('Window has been resized!');
            const rootElement = this._shadowRoot.getElementById('root');
            const contentElement = this._shadowRoot.getElementById('content');
            const rootWidth = rootElement.clientWidth;
            const rootHeight = rootElement.clientHeight;
            contentElement.style.width = `${rootWidth - 20}px`;
            contentElement.style.height = `${rootHeight - 20}px`;
        }
    }

    customElements.define('shadow-widget', PerformanceHelp);
})();
