(function () {

    let template = document.createElement("template");
    template.innerHTML = `
        <form id="form">
            <fieldset>
                <legend>Widget Styling Properties</legend>
                <table>
                    
                    <tr>
                        <td>Background Color</td>
                        <td><input id="background_color" type="text" placeholder="rgba(255, 255, 255, 0.0)"></td>
                    </tr>
                    
                    <tr>
                        <td>Opacity</td>
                        <td><input type="range" min="0" max="1" step="0.05" value="0.5" input id="opacity"></td>
                    </tr>

                    <tr>
                        <td>Blur</td>
                        <td><input type="range" min="0" max="50" step="2.5" value="25" input id="blur"></td>
                    </tr>

                    <tr>
                        <td>Border Radius</td>
                        <label>
                        <td><input type="range" min="0" max="50" step="2.5" value="25" input id="borderRadius"></td>
                        </label>
                    </tr>                   
                                      
                    <tr>
                        <td>Shadow Size</td>
                        <td><input type="range" min="0" max="50" step="2.5" value="25" input id="shadowSize"></td>
                    </tr>



                    <!-- disabled because the effect is applied by the opacity property
                     <tr>
                        <td>Shadow Darkness</td>
                        <td><input type="range" min="0" max="1" step="0.05" value="0.5" input id="shadowDarkness"></td>
                    </tr>
                    -->
                    
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
            
            // change background color
            // this is done using the framework like it is described in the Developer Guide
            this.dispatchEvent(new CustomEvent("propertiesChanged", {
                detail: {
                    properties: {
                        backgroundColor: this.backgroundColor
                    }
                }
            }));

            // this is a workaround, because it didn't work the "framework way"
            // To still apply changes a CostumEvent is explicitly directed to the main webcomponent using
            // the querySelector('shadow-widget')
            document.querySelector('shadow-widget').dispatchEvent(new CustomEvent("propertiesChanged", {
                detail: {
                    // note that every of those this statements implicitly calls the getter methods
                    // you can see below
                    properties: {
                        opacity: this.opacity,
                        blur: this.blur,
                        borderRadius: this.borderRadius,
                        shadowSize: this.shadowSize,
                        //shadowDarkness: this.shadowDarkness
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
        
        set borderRadius(value) {
            this._shadowRoot.getElementById("borderRadius").value = value;
        }
    
        get borderRadius() {
            return this._shadowRoot.getElementById("borderRadius").value;
        }

        set shadowSize(value) {
            this._shadowRoot.getElementById("shadowSize").value = value;
        }

        get shadowSize() {
            return this._shadowRoot.getElementById("shadowSize").value;
        }


        /*
        set shadowDarkness(value) {
            this._shadowRoot.getElementById("shadowDarkness").value = value;
        }

        get shadowDarkness() {
            return this._shadowRoot.getElementById("shadowDarkness").value;
        }
        */
    }

    customElements.define("shadow-widget-style", WidgetStylingPanel);
})();
