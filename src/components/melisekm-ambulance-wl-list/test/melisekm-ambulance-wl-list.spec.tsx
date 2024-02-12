import { newSpecPage } from '@stencil/core/testing';
import { MelisekmAmbulanceWlList } from '../melisekm-ambulance-wl-list';

describe('melisekm-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MelisekmAmbulanceWlList],
      html: `<melisekm-ambulance-wl-list></melisekm-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <melisekm-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </melisekm-ambulance-wl-list>
    `);
  });
});
