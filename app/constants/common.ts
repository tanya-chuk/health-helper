export const CURRENT_YEAR = new Date().getFullYear();

export const YEARS_LIST = Array.from(new Array(100), (val, index) => {
  const difference = CURRENT_YEAR - index;
  return { name: difference, value: difference };
});
