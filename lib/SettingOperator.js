import { SYMBOLS_NOSPACE, SYMBOLS } from '../constants';

const settingOperator = (
  item,
  firstValue,
  setFirstValue,
  currentOperation,
  setCurrentOperation,
  secondValue,
  setSecondValue,
  setResult
) => {
  if (SYMBOLS.includes(item.symbol) && firstValue && !secondValue) {
    if (firstValue[firstValue.length - 1] !== '.') {
      setCurrentOperation(item.symbol);
      setResult(firstValue + item.symbol);
    }

    if (firstValue[firstValue.length - 1] === '.') {
      setFirstValue(firstValue.slice(0, [firstValue.length - 1]));
      setCurrentOperation(item.symbol);
      setResult(firstValue.slice(0, [firstValue.length - 1]) + item.symbol);
    }

    if (
      SYMBOLS_NOSPACE.includes(firstValue[firstValue.length - 2]) &&
      SYMBOLS.includes(item.symbol)
    ) {
      setFirstValue(firstValue);
      setResult(firstValue + currentOperation + secondValue);
      setCurrentOperation('');
    }
  }

  if (
    SYMBOLS.includes(item.symbol) &&
    firstValue &&
    currentOperation &&
    secondValue
  ) {
    if (secondValue[secondValue.length - 1] !== '.') {
      setFirstValue(firstValue + currentOperation + secondValue);
      setCurrentOperation(item.symbol);
      setSecondValue('');
      setResult(firstValue + currentOperation + secondValue + item.symbol);
    }

    if (secondValue[secondValue.length - 1] === '.') {
      setFirstValue(
        firstValue +
          currentOperation +
          secondValue.slice(0, [secondValue.length - 1])
      );
      setCurrentOperation(item.symbol);
      setSecondValue('');
      setResult(
        firstValue +
          currentOperation +
          secondValue.slice(0, [secondValue.length - 1]) +
          item.symbol
      );
    }
  }
};

export default settingOperator;
