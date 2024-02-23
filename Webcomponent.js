(function () {
    let tmpl = document.createElement('template');
    tmpl.innerHTML =
       `
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Polaroid Viewport</title>
        <style>
            .polaroid {
                width: 90vw;
                /* 90% of the viewport width */
                height: 90vh;
                /* 90% of the viewport height */
                margin: auto;
                /* Center the polaroid */
                padding: 15px;
                background-color: coral;
                border: black;
                box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
                
            }
        </style>
        </head>

        <body>
            <div class="polaroid"></div>
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
