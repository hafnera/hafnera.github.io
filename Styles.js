(function () {

    let template = document.createElement("template");
    template.innerHTML = `
        <form id="form">
            <fieldset>
                <legend>Widget Styling Properties</legend>
                <table>
                    
                    <tr>
                        <td>Background Color</td>
                        <td><input id="background_color" type="text" placeholder="rgba(0, 0, 0, 0.5)"></td>
                    </tr>
                    
                    <tr>
                        <td>Opacity</td>
                        <td><input type="range" min="0" max="1" step="0.05" value="0.5" input id="opacity"></td>
                    </tr>
                    
                    <tr>
                        <td>Blur</td>
                        <label>
                        <td><input type="range" min="0" max="50" step="2.5" value="25" input id="blur"></td>
                        </label>
                    </tr>

                    <tr>
                        <td>Border Radius</td>
                        <label>
                        <td><input type="range" min="0" max="50" step="1" value="10" input id="borderRadius"></td>
                        </label>
                    </tr>
                   
                </table>
                <input type="submit" value="Submit">
            </fieldset>
        </form>
    `;

    class WidgetStylingPanel extends HTMLElement {
        constructor() {
            super();
            this._shadowRoot = this.attachShadow({ mode: "open" });
            this._shadowRoot.appendChild(template.content.cloneNode(true));
            this._shadowRoot.getElementById("form").addEventListener("submit", this._submit.bind(this));
        }

        _submit(e) {
            console.log('submit() called');
            e.preventDefault();
            document.querySelector('shadow-widget').dispatchEvent(new CustomEvent("propertiesChanged", {
                detail: {
                    properties: {
                        opacity: this.opacity,
                        blur: this.blur,
                        borderRadius: this.borderRadius
                    }
                }
            }));
            
            
            // change background color
            this.dispatchEvent(new CustomEvent("propertiesChanged", {
                detail: {
                    properties: {
                        backgroundColor: this.backgroundColor
                    }
                }
            }));
            
        }

        set backgroundColor(color) {
            this._shadowRoot.getElementById("background_color").value = color;
        }

        get backgroundColor() {
            return this._shadowRoot.getElementById("background_color").value;
        }

        set blur(value) {
            this._shadowRoot.getElementById("blur").value = value;
        }

        get blur() {
            return this._shadowRoot.getElementById("blur").value;
        }

        set opacity(value) {
            this._shadowRoot.getElementById("opacity").value = value;
        }

        get opacity() {
            return this._shadowRoot.getElementById("opacity").value;
        }
    }

    customElements.define("shadow-widget-style", WidgetStylingPanel);
})();
