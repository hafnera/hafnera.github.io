(function () {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
        <style>
            :host {
                display: inline-block;
            }
            button {
                padding: 10px 20px;
                border: none;
                border-radius: 5px;
                background-color: #007bff;
                color: white;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                cursor: pointer;
            }
            button:hover {
                background-color: #0056b3;
            }
            label {
                display: block;
                margin-top: 10px;
            }
            input[type="range"] {
                width: 100%;
            }
        </style>
        <button type="button" id="myBtn">Helper Button</button>
        <label for="brightness">Brightness:</label>
        <input type="range" id="brightness" min="0" max="200" value="100">
        <label for="blur">Blur:</label>
        <input type="range" id="blur" min="0" max="10" value="0">
        <label for="radius">Radius:</label>
        <input type="range" id="radius" min="0" max="20" value="0">
    `;

    class PerformanceHelp extends HTMLElement {
        constructor() {
            super();
            this.init();           
        }

        init() {            
            let shadowRoot = this.attachShadow({mode: "open"});
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
