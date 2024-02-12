import { newE2EPage } from '@stencil/core/testing';

describe('melisekm-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<melisekm-ambulance-wl-list></melisekm-ambulance-wl-list>');

    const element = await page.find('melisekm-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
