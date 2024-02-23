(function () {
    let tmpl = document.createElement('template');
    tmpl.innerHTML =
        `
         <head>
             <meta charset="UTF-8">
             <meta name="viewport" content="width=device-width, initial-scale=1.0">
             <title>Button Shadow Customizer</title>
             <style>
                
             </style>
         </head>

         <body>
            <canvas id="myCanvas" width="200" height="100" style="border:1px solid #d3d3d3;"></canvas>

            <script>
            var c = document.getElementById("myCanvas");
            var ctx = c.getContext("2d");
            // Create gradient
            var grd = ctx.createLinearGradient(0,0,200,0);
            grd.addColorStop(0,"red");
            grd.addColorStop(1,"white");
            // Fill with gradient
            ctx.fillStyle = grd;
            ctx.fillRect(10,10,150,80);
            >/skript>
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
