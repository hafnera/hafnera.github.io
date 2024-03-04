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
            background-color: rgba(255, 255, 255, 0.0);
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

            if ("shadowSize" in changedProperties) {
                this._updateShadowSize(changedProperties.shadowSize);
            }
            if ("shadowDarkness" in changedProperties) {
                this._updateShadowDarkness(changedProperties.shadowDarkness);
            }
            if ("shadowRadius" in changedProperties) {
                this._updateShadowRadius(changedProperties.shadowRadius);
            }
            
        }

        // neu
       _updateShadowSize(size) {
            const contentElement = this._shadowRoot.querySelector('#content');
            contentElement.style.boxShadow = `${size}px ${size}px ${size}px rgba(0, 0, 0, 0.5)`;
        }
        
        _updateShadowDarkness(darkness) {
            const contentElement = this._shadowRoot.querySelector('#content');
            const boxShadow = contentElement.style.boxShadow.split(" ");
            boxShadow[3] = `rgba(0, 0, 0, ${darkness})`;
            contentElement.style.boxShadow = boxShadow.join(" ");
        }
        
        _updateShadowRadius(radius) {
            const contentElement = this._shadowRoot.querySelector('#content');
            contentElement.style.borderRadius = `${radius}px`;
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
