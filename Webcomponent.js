(function () {
    let tmpl = document.createElement('template');
    tmpl.innerHTML =
        `
         <head>
             <meta charset="UTF-8">
             <meta name="viewport" content="width=device-width, initial-scale=1.0">
             <title>Button Shadow Customizer</title>
             <style>
             
                 #myCanvas{
                     border:1px solid #d3d3d3;
                     width: 100%;
                     height: 100%;
                     box-shadow: 0 50px 50px rgba(0, 0, 0, 0.2);
                 }
                 
             </style>
         </head>

         <body>
            <canvas id="myCanvas"></canvas>
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
