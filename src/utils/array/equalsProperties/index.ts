export const equalsProperties = ( firstProperty: string, secondProperty: string, array: []) => {
  return array.some((item) => {
    return item[firstProperty] === item[secondProperty];
  });
};
