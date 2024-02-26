import { newE2EPage } from '@stencil/core/testing';

describe('melisekm-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<melisekm-ambulance-wl-app></melisekm-ambulance-wl-app>');

    const element = await page.find('melisekm-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
