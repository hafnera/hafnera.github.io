(function () {
    let tmpl = document.createElement('template');
    tmpl.innerHTML =
       `
       <head>
    <style>
        div.polaroid {

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

    <h1>Create Polaroid Images</h1>

    <p>The box-shadow property can be used to create polaroid images:</p>

    <div class="polaroid">
        <img src="rock600x400.jpg" alt="Norway" style="width:100%">
        <div class="container">
            <p>Hardanger, Norway</p>
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
