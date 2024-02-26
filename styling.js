(function() {
    let template = document.createElement("template");
    template.innerHTML = `
        <body>
            <form id="form">
                <fieldset>
                    <legend>Styling Panel</legend>
                    <table>
                        <tr>
                            <td>Shadow</td>
                            <td><input id="shadow_input" type="checkbox"></td>
                        </tr>
                        <tr>
                            <td>Size</td>
                            <td><input id="size_input" type="range" min="1" max="100" value="50"></td>
                        </tr>
                    </table>
                </fieldset>
            </form>
        </body>
    `;

    class StylingPanel extends HTMLElement {
        constructor() {
            super();
            this._shadowRoot = this.attachShadow({mode: "open"});
            this._shadowRoot.appendChild(template.content.cloneNode(true));
            this._shadowRoot.getElementById("form").addEventListener("input", this._updateProperties.bind(this));
        }

        _updateProperties() {
            const shadowValue = this._shadowRoot.getElementById("shadow_input").checked;
            const sizeValue = this._shadowRoot.getElementById("size_input").value;
            this.dispatchEvent(new CustomEvent("propertiesChanged", {
                detail: {
                    properties: {
                        shadow: shadowValue,
                        size: sizeValue
                    }
                }
            }));
        }

        set shadow(value) {
            this._shadowRoot.getElementById("shadow_input").checked = value;
        }

        set size(value) {
            this._shadowRoot.getElementById("size_input").value = value;
        }
    }

    customElements.define("custom-button-styling", StylingPanel);
})();
