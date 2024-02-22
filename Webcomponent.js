(function () {
    let tmpl = document.createElement('template');
    tmpl.innerHTML =
        `
         <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>Button Shadow Customizer</title>
             <style>
                .container {
                      position: relative;
                }

                myBtn.center {
                  position: absolute;
                  top: 50%;
                  width: 100%;
                  text-align: center;
                  font-size: 18px;
                }
                
                img { 
                  width: 100%;
                  height: auto;
                  opacity: 0.3;
                }
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
