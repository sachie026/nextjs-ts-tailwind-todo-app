const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export function dateDiffInDays(current: Date, creation: Date) {
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;

  // Discard the time and time-zone information.
  const utc1 = Date.UTC(
    current.getFullYear(),
    current.getMonth(),
    current.getDate()
  );
  const utc2 = Date.UTC(
    creation.getFullYear(),
    creation.getMonth(),
    creation.getDate()
  );

  return Math.abs((utc2 - utc1) / _MS_PER_DAY);
}

export function getDayWithTime(creation: string) {
  const tempDate = new Date(creation);
  return `${tempDate.getDate()} ${
    monthNames[tempDate.getMonth()]
  }, ${tempDate.getHours()}:${tempDate.getMinutes()}`;
}
