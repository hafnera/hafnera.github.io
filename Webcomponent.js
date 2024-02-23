(function () {
    let tmpl = document.createElement('template');
    tmpl.innerHTML =
       `
        <head>
            <meta charset="UTF-8">
            <title>Polaroid Viewport</title>
            <style>
                html,
                body {
                    background-color: yellow;
                    margin: auto;
                    padding: 10px;
                    height: 100%;
                    width: 100%;
                }
        
                .polaroid {
                    width: 70%;
                    height: 70%;
                    padding: 20px;
                    background-color: coral;
                    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);
                    display: flex;
                    justify-content: center;
                    align-items: center;
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
