export const getFormattedCurrentDate = (): string => {
  const currentDate: Date = new Date();
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    hourCycle: "h12",
  };
  const timestamp: string = new Intl.DateTimeFormat("es-ES", options).format(
    currentDate
  );

  const [date, time] = timestamp.split(", ");
  const [formattedTime, period] = time.split(" ");

  return `${date}, ${formattedTime} ${period}`;
};
