import { ToggleSidenav } from './navigation.actions';
import { NavigationState, initialState, reducer } from './navigation.reducer';

describe('Navigation Reducer', () => {
  describe('valid Navigation actions ', () => {
    it('should set the sidenav state', () => {
      const action = new ToggleSidenav();
      const result: NavigationState = reducer(initialState, action);

      expect(result.showSidenav).toBe(false);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;
      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
