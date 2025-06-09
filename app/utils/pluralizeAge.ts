type LDMLPluralRule = 'zero' | 'one' | 'two' | 'few' | 'many' | 'other';

const pluralRules = new Intl.PluralRules('ru-RU');

const forms: Record<LDMLPluralRule, string> = {
  one: 'год',
  two: 'года',
  few: 'года',
  many: 'лет',
  zero: 'лет',
  other: 'года',
};

export const pluralizeAge = (age: number) => {
  const rule = pluralRules.select(age);
  return `${age} ${forms[rule]}`;
};
