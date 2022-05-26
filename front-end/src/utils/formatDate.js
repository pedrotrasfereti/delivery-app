/**
 * Transforms a sequelize timestamp to a DD/MM/YYYY date,

 * @param timestamp The timestamp string.

 * @returns A date.
 */
export default function formatDate(timestamp) {
  const date = new Date(timestamp);

  // add leading zeros to day and month
  const lastTwoChars = -2;

  const day = (`0${date.getDate()}`).slice(lastTwoChars);
  const month = (`0${date.getMonth() + 1}`).slice(lastTwoChars);
  const fullYear = date.getFullYear();

  return `${day}/${month}/${fullYear}`;
}
