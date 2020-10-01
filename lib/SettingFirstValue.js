import { SYMBOLS_NOSPACE, NUMBERS } from '../constants';

const settingFirstValue = (
  item,
  firstValue,
  setFirstValue,
  currentOperation,
  secondValue,
  result,
  setResult
) => {
  const splitFirstValue = firstValue.split(' ');
  const lastValue = splitFirstValue[splitFirstValue.length - 1];

  if (NUMBERS.includes(item.symbol) && !firstValue) {
    if (item.symbol !== '.') {
      setFirstValue(item.symbol);
      setResult(item.symbol);
    }
    if (item.symbol === '.') {
      setFirstValue(`0${item.symbol}`);
      setResult(`0${item.symbol}`);
    }
  }

  if (
    NUMBERS.includes(item.symbol) &&
    firstValue &&
    !currentOperation &&
    !secondValue
  ) {
    if (
      lastValue[0] !== '0' ||
      (lastValue[0] === '0' && item.symbol === '.') ||
      lastValue[1] === '.'
    ) {
      setFirstValue(firstValue + item.symbol);
      setResult(firstValue + item.symbol);
    }

    if (lastValue[0] === '0' && result.length === 1 && item.symbol !== '.') {
      setFirstValue(item.symbol);
      setResult(item.symbol);
    }

    if (
      (lastValue.includes('.') && item.symbol === '.') ||
      (SYMBOLS_NOSPACE.includes(firstValue[firstValue.length - 2]) &&
        item.symbol === '.')
    ) {
      setFirstValue(firstValue);
      setResult(firstValue + currentOperation + secondValue);
    }
  }
};

export default settingFirstValue;
