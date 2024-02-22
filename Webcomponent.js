(function () {
    let tmpl = document.createElement('template');
    tmpl.innerHTML =
        `
         <head>
             <meta charset="UTF-8">
             <meta name="viewport" content="width=device-width, initial-scale=1.0">
             <title>Button Shadow Customizer</title>
             <style>
                #myBtn {
                    position: absolute;
                    bottom: 50px;
                    right:150px;
                    left: 150px;
                    width: 200px;
                    height: 120px;
                    border: 3px solid green;
                    background: rgba(152,165,204,0.5);
                    -webkit-backdrop-filter: blur(10px);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(152,165,204,0.25);
                }
                /*body{
                    background-image: url("paper.gif");
                }*/
             </style>
         </head>

         <body>
         <button type="button" id="myBtn">Helper Button</button>
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
