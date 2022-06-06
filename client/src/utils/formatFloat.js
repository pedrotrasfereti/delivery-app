/**
 * Rounds a float to two decimal places and replaces
 * period with comma mark.

 * @param value Any float number.
 */
export default function formatFloat(value) {
  return String(Number(value).toFixed(2)).replace('.', ',');
}
