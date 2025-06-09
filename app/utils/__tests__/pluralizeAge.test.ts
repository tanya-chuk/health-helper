import { pluralizeAge } from '../pluralizeAge';

describe('Checks pluralizeAge function', () => {
  test('Returns correct form for zero', () => {
    expect(pluralizeAge(30)).toBe('30 лет');
  });

  test('Returns correct form for one', () => {
    expect(pluralizeAge(31)).toBe('31 год');
  });

  test('Returns correct form for two', () => {
    expect(pluralizeAge(32)).toBe('32 года');
  });

  test('Returns correct form for few', () => {
    expect(pluralizeAge(33)).toBe('33 года');
  });

  test('Returns correct form for many', () => {
    expect(pluralizeAge(35)).toBe('35 лет');
  });
});
