import { PoliticalApiPage } from './app.po';

describe('political-api App', () => {
  let page: PoliticalApiPage;

  beforeEach(() => {
    page = new PoliticalApiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
