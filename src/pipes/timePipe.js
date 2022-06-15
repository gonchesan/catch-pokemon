export /**
 *
 *
 * @param The time to format
 * @return A number formatted as string 'mm:ss'
 */
const TimePipe = (number) => {
  return `${('0' + Math.floor((number / 1000) % 60)).slice(-2)}:${(
    '0' +
    ((number / 10) % 100)
  ).slice(-2)}`;
};
