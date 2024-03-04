(function () {

    let template = document.createElement("template");
    template.innerHTML = `
        <form id="form">
            <fieldset>
                <legend>Widget Styling Properties</legend>
                <table>
                    <tr>
                        <td>Background Color</td>
                        <td><input id="background_color" type="color"></td>
                    </tr>
                    <tr>
                        <td>Border Color</td>
                        <td><input id="border_color" type="color"></td>
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
            this.dispatchEvent(new CustomEvent("propertiesChanged", {
                detail: {
                    properties: {
                        backgroundColor: this.backgroundColor,
                        borderColor: this.borderColor
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

        set borderColor(color) {
            this._shadowRoot.getElementById("border_color").value = color;
        }

        get borderColor() {
            return this._shadowRoot.getElementById("border_color").value;
        }
    }

    customElements.define("shadow-widget-style", WidgetStylingPanel);
})();
