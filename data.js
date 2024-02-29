(function () {
    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        /* CSS styles for the widget */
        #root {
          position: relative;
          width: 200px;
          height: 100px;
          background-color: #f0f0f0;
          border: 1px solid #ccc;
          padding: 10px;
          box-sizing: border-box;
        }
        #content {
          position: absolute;
          top: 10px;
          left: 10px;
          right: 10px;
          bottom: 10px;
          background-color: white;
          /* Add box-shadow */
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        }
      </style>
      <div id="root">
        <div id="content">
          <!-- Widget content -->
          Hover over me!
        </div>
      </div>
    `;

    class CustomWidget extends HTMLElement {
        constructor() {
            super();

            // Initialize shadow DOM and add template
            this._shadowRoot = this.attachShadow({ mode: 'open' });
            this._shadowRoot.appendChild(template.content.cloneNode(true));

            // Add event listeners for mouseover and mouseout
            const rootElement = this._shadowRoot.getElementById('root');
            rootElement.addEventListener('mouseover', this._handleMouseOver.bind(this));
            rootElement.addEventListener('mouseout', this._handleMouseOut.bind(this));

            // Add event listener for the resize event
            window.addEventListener('resize', this.onResize.bind(this));
        }

        _handleMouseOver(event) {
            console.log('Mouse over the widget!');
            event.target.style.backgroundColor = '#ccc';
        }

        _handleMouseOut(event) {
            console.log('Mouse out of the widget!');
            event.target.style.backgroundColor = '#f0f0f0';
        }

        onResize() {
            console.log('Window has been resized!');
            const rootElement = this._shadowRoot.getElementById('root');
            const contentElement = this._shadowRoot.getElementById('content');
            const rootWidth = rootElement.clientWidth;
            const rootHeight = rootElement.clientHeight;
            contentElement.style.width = `${rootWidth - 20}px`; // Subtract 20px for padding
            contentElement.style.height = `${rootHeight - 20}px`; // Subtract 20px for padding
        }
    }

    customElements.define('custom-widget', CustomWidget);
})();
