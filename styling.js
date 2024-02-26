(function() {
    let template = document.createElement("template");
    template.innerHTML = `
        <head>
            <style>
                
            </style>
        </head>
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
            this.init();
        }

        _init() {
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
        
    customElements.define("custom-button-styling", StylingPanel);
})();
