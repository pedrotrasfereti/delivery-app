/* Utils */
import formatDate from './formatDate';

const monthNumberToLabelMap = {
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December',
};

/**
 * Generates a timeline based on the dates of each order in a list.

 * @param {array} orders All orders.

 * @returns A timeline.
 */
export default function generateTimeline(orders) {
  const ordersCopy = Array(...orders);

  const newestFirst = ordersCopy.reverse();

  const saleDates = newestFirst.map((o) => formatDate(o.saleDate));

  const noDuplicates = [...new Set(saleDates)];

  const arrayToObj = noDuplicates.map((date, index, array) => {
    // Current Date
    const year = date.split('/')[2];
    const monthNumber = (date.split('/')[1]).replace('0', '');
    const month = monthNumberToLabelMap[monthNumber];
    const day = date.split('/')[0];

    // Omit year if previous and current years match
    const prevDate = array[index - 1];

    if (prevDate) {
      // Previous Date
      const prevYear = prevDate.split('/')[2];

      return {
        date,
        year: year === prevYear ? '' : year,
        month,
        day,
      };
    }

    return {
      date,
      year,
      month,
      day,
    };
  });

  return arrayToObj;
}
