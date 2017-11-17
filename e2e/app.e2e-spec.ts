import { GwReservePage } from './app.po';

describe('gw-reserve App', function() {
  let page: GwReservePage;

  beforeEach(() => {
    page = new GwReservePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
