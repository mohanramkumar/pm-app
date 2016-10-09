import { PmAppPage } from './app.po';

describe('pm-app App', function() {
  let page: PmAppPage;

  beforeEach(() => {
    page = new PmAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
