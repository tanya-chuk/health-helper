/**
 * Transforms array of strings into a single string of words separated by commas
 * @param list - an array of string values
 * @returns - a string consisting of all array values separated by commas
 */
export const stringifyReaderFriendly = (list?: Array<string>) => {
  if (!list?.length) {
    return '';
  }

  return list.reduce((acc, val) => acc.concat(', ', val));
};
