export const getTimestamp = (): number => {
  const currentDate: Date = new Date();
  const timestamp: number = currentDate.getTime();

  return timestamp;
};
