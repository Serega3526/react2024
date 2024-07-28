import { afterEach, describe, expect, test, vi } from 'vitest';
import getString from './getString';
import setString from './setString';

const str = 'search';

describe('Local storage Service', () => {
  const getItemSpy = vi.spyOn(Storage.prototype, 'getItem');
  const setItemSpy = vi.spyOn(Storage.prototype, 'setItem');

  afterEach(() => {
    localStorage.clear();
    getItemSpy.mockClear();
    setItemSpy.mockClear();
  });

  describe('getString', () => {
    test('get str from LocalStorage', () => {
      const text = 'Test text';

      localStorage.setItem(str, text.trimEnd());

      expect(getString()).toStrictEqual(text);
      expect(getItemSpy).toHaveBeenCalledWith(str);
    });
  });

  describe('setString', () => {
    test('add new str', () => {
      const text = 'Test text';

      setString(text);

      expect(setItemSpy).toHaveBeenCalledWith(str, text.trimEnd());
      expect(getString()).toStrictEqual(text);
    });
  });
});
