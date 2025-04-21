export const stringifyReaderFriendly = (list: Array<string>) => {
  if (!list.length) {
    return '';
  }

  return list.reduce((acc, val) => acc.concat(', ', val));
};
