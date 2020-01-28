import { navigationQuery } from './navigation.selectors';

describe('Navigation Selectors', () => {
  let storeState;

  beforeEach(() => {
    storeState = {
      navigation: {
        showSidenav: true,
      },
    };
  });

  describe('Navigation Selectors', () => {
    it('isShowSidenav() should return side navigation state', () => {
      const result = navigationQuery.isShowSidenav(storeState);

      expect(result).toBe(true);
    });
  });
});
