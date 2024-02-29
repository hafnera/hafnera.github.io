(function () {
    let tmpl = document.createElement('template');
    tmpl.innerHTML =
       `
        <style>
        /* CSS styles for the widget */
        #root {
            position: relative;
            width: 200px;
            height: 100px;
            background-color: #f0f0f0;
            border: 1px solid #ccc;
            padding: 10px;
            box-sizing: border-box;
        }
    
        #content {
            position: absolute;
            top: 10px;
            left: 10px;
            right: 10px;
            bottom: 10px;
            background-color: white;
            /* Add box-shadow */
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

            this._shadowRoot = this.attachShadow({ mode: 'open' });
            this._shadowRoot.appendChild(template.content.cloneNode(true));

            // Add event listener for the resize event
            window.addEventListener('resize', this.onResize.bind(this))
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
