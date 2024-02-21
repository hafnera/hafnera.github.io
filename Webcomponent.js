(function () {
    let tmpl = document.createElement('template');
    tmpl.innerHTML =
        `<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Button Shadow Customizer</title>

    <style>
        button {
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            background-color: #007bff;
            color: white;
            cursor: pointer;
            transition: box-shadow 0.3s ease;
        }

        #myBtn {
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
    </style>

</head>

<body>
    <button type="button" id="myBtn">Helper Button</button>
    <label for="brightness">Brightness:</label>
    <input type="range" id="brightness" min="0" max="200" value="100">
    <label for="blur">Blur:</label>
    <input type="range" id="blur" min="0" max="10" value="0">
    <label for="radius">Radius:</label>
    <input type="range" id="radius" min="0" max="20" value="0">
</body>` ;

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


            shadowRoot.appendChild(tmpl.content.cloneNode(true));

            const brightnessRange = shadowRoot.getElementById('brightness');
            const blurRange = shadowRoot.getElementById('blur');
            const radiusRange = shadowRoot.getElementById('radius');
            const button = shadowRoot.getElementById('myBtn');

            brightnessRange.addEventListener('input', updateShadow);
            blurRange.addEventListener('input', updateShadow);
            radiusRange.addEventListener('input', updateShadow);

            function updateShadow() {
                const brightnessValue = brightnessRange.value;
                const blurValue = blurRange.value;
                const radiusValue = radiusRange.value;

                const boxShadowValue = `0 2px ${blurValue}px rgba(0, 0, 0, ${brightnessValue / 200})`;
                button.style.boxShadow = boxShadowValue;
            }

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
