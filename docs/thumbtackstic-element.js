import { css, LitElement, html } from 'lit-element';
import { style } from '../dist/thumbtackstic.style';
import '../dist/thumbtackstic.min';

class ThumbtacksticElement extends LitElement {
  static get styles() {
    return [
      style,
      css`
        #thumbtackstic {
          display: block;
          position: relative;
          width: 100%;
          height: 800px;
        }
      `
    ];
  }

  render() {
    return html`
      <div id="thumbtackstic"></div>
    `;
  }

  firstUpdated() {
    const container = this.shadowRoot?.getElementById('thumbtackstic');
    const editor = new Thumbtackstic(container);

    editor.reroute = true;
    editor.reroute_fix_curvature = true;

    editor.start();

    const data = {
      name: ''
    };

    editor.addNode('foo', 1, 1, 100, 200, 'foo', data, 'Foo');
    editor.addNode('bar', 1, 1, 400, 100, 'bar', data, 'Bar A');
    editor.addNode('bar', 1, 1, 400, 300, 'bar', data, 'Bar B');

    editor.addConnection(1, 2, "output_1", "input_1");
    editor.addConnection(1, 3, "output_1", "input_1");
  }
}

customElements.define("thumbtackstic-element", ThumbtacksticElement);
