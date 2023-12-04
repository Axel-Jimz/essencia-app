export const extractUniqueProperties = (array: any[], property: string): string[] => {
  const uniqueValues: any = [];

  for (const object of array) {
    const value = object[property];
    if (!uniqueValues.includes(value)) {
      uniqueValues.push(value);
    }
  }

  return uniqueValues;
};
