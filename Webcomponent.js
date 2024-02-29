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

            let shadowRoot = this.attachShadow({ mode: "open" });
            shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this.addEventListener("click", event => {
                var event = new Event("onClick");
                this.fireChanged();
                this.dispatchEvent(event);
            });

        }

        fireChanged() {
            console.log("OnClick Triggered");

        }

    }

    customElements.define('custom-button', PerformanceHelp);
})();
