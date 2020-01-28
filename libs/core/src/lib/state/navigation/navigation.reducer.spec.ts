import { actionNavigationToggle } from './navigation.actions';
import { initialState, navigationReducer } from './navigation.reducer';

describe('Navigation Reducer', () => {
  describe('valid Navigation actions ', () => {
    it('should set the sidenav state', () => {
      const action = actionNavigationToggle();
      const result = navigationReducer(initialState, action);

      expect(result.showSidenav).toBe(false);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;
      const result = navigationReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
