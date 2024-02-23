(function () {
    let tmpl = document.createElement('template');
    tmpl.innerHTML =
       `
       <!DOCTYPE html>
<html>

<head>
    <style>
        div.polaroid {
            margin: auto;
            width: 300px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            text-align: center;
        }

        div.container {
            padding: 10px;
        }
    </style>
</head>

<body>

    <canvas id="myUpperCanvas">
        Your browser does not support the canvas tag.
    </canvas>

    <div class="polaroid">
        <img src="rock600x400.jpg" alt="" style="width:100%">
        <canvas id="myUpperCanvas">
            Your browser does not support the canvas tag.
        </canvas>
        <div class="container">
            <canvas id="myCanvas">
                Your browser does not support the canvas tag.
            </canvas>
        </div>
    </div>

</body>

</html>
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
