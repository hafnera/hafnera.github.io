(function () {

    let template = document.createElement("template");
    template.innerHTML = `
        <form id="form">
            <fieldset>
                <legend>Widget Styling Properties</legend>
                <table>
                    <tr>
                        <td>Shadow Size</td>
                        <td><input id="shadow_size" type="number" min="0" step="1"></td>
                    </tr>
                    <tr>
                        <td>Shadow Darkness</td>
                        <td><input id="shadow_darkness" type="range" min="0" max="1" step="0.1"></td>
                    </tr>
                    <tr>
                        <td>Shadow Radius</td>
                        <td><input id="shadow_radius" type="number" min="0" step="1"></td>
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
            e.preventDefault();
            this.dispatchEvent(new CustomEvent("propertiesChanged", {
                detail: {
                    properties: {
                        shadowSize: this.shadowSize,
                        shadowDarkness: this.shadowDarkness,
                        shadowRadius: this.shadowRadius
                    }
                }
            }));
        }

        set shadowSize(size) {
            this._shadowRoot.getElementById("shadow_size").value = size;
        }

        get shadowSize() {
            return this._shadowRoot.getElementById("shadow_size").value;
        }

        set shadowDarkness(darkness) {
            this._shadowRoot.getElementById("shadow_darkness").value = darkness;
        }

        get shadowDarkness() {
            return this._shadowRoot.getElementById("shadow_darkness").value;
        }

        set shadowRadius(radius) {
            this._shadowRoot.getElementById("shadow_radius").value = radius;
        }

        get shadowRadius() {
            return this._shadowRoot.getElementById("shadow_radius").value;
        }
    }

    customElements.define("shadow-widget-style", WidgetStylingPanel);
})();
