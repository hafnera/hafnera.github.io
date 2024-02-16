let tmpl = document.createElement('template');
tmpl.innerHTML = `<canvas id="myChart"></canvas>`;

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
    })
  }
}




customElements.define('myChart', PerformanceHelp);
