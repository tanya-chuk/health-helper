import { stringifyReaderFriendly } from '../stringifyReaderFriendly';

describe('Checks stringifyReaderFriendly function', () => {
  test('Creates list separated by commas on an array of strings', () => {
    expect(stringifyReaderFriendly(['1', '2'])).toBe('1, 2');
  });

  test('Returns empty string for an empty array', () => {
    expect(stringifyReaderFriendly([])).toBe('');
  });

  test('Returns empty string for an empty argument list', () => {
    expect(stringifyReaderFriendly()).toBe('');
  });
});
