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
                 }
                 
             </style>
         </head>

         <body>
            <canvas id="myCanvas"></canvas>

            <script>
                var canvas = document.getElementById('responsive-canvas');
                var heightRatio = 1.5;
                canvas.height = canvas.width * heightRatio;
            >/script>
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
