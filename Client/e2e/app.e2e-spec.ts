import { DogTreatClientPage } from './app.po';

describe('dog-treat-client App', () => {
  let page: DogTreatClientPage;

  beforeEach(() => {
    page = new DogTreatClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
