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
                    Content
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

    customElements.define('custom-button', PerformanceHelp);
})();
