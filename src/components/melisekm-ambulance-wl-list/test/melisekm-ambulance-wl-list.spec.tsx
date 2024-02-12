import { newSpecPage } from '@stencil/core/testing';
import { MelisekmAmbulanceWlList } from '../melisekm-ambulance-wl-list';

describe('melisekm-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MelisekmAmbulanceWlList],
      html: `<melisekm-ambulance-wl-list></melisekm-ambulance-wl-list>`,
    });
    const wlList = page.rootInstance as MelisekmAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length

    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
    expect(items.length).toEqual(expectedPatients);

  });
});
