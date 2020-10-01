import { NUMBERS } from '../constants';

const settingSecondValue = (
  item,
  firstValue,
  currentOperation,
  secondValue,
  setSecondValue,
  setResult
) => {
  if (
    NUMBERS.includes(item.symbol) &&
    firstValue &&
    currentOperation &&
    item.symbol !== '.'
  ) {
    setSecondValue(item.symbol);
    setResult(firstValue + currentOperation + item.symbol);
  }

  if (
    NUMBERS.includes(item.symbol) &&
    firstValue &&
    currentOperation &&
    secondValue
  ) {
    if (
      secondValue[0] !== '0' ||
      (secondValue[0] === '0' && item.symbol === '.') ||
      secondValue[1] === '.'
    ) {
      setSecondValue(secondValue + item.symbol);
      setResult(firstValue + currentOperation + secondValue + item.symbol);
    }

    if (secondValue.includes('.') && item.symbol === '.') {
      setSecondValue(secondValue);
      setResult(firstValue + currentOperation + secondValue);
    }
  }
};

export default settingSecondValue;
