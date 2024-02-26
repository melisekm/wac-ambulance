import { newSpecPage } from '@stencil/core/testing';
import { MelisekmAmbulanceWlApp } from '../melisekm-ambulance-wl-app';

describe('Melisekm-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [MelisekmAmbulanceWlApp],
      html: `<Melisekm-ambulance-wl-app base-path="/"></Melisekm-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("melisekm-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [MelisekmAmbulanceWlApp],
      html: `<Melisekm-ambulance-wl-app base-path="/ambulance-wl/"></Melisekm-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("melisekm-ambulance-wl-list");
  });
});