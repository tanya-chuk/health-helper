export const stringifyList = (list: Array<string>) => {
  if (!list.length) {
    return "";
  }

  return list.reduce((acc, val) => acc.concat(", ", val));
};
