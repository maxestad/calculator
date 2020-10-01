import { NUMBERS, SYMBOLS_NOSPACE } from '../constants';

const settingOtherSymbols = (
  item,
  firstValue,
  setFirstValue,
  currentOperation,
  setCurrentOperation,
  secondValue,
  setSecondValue,
  result,
  setResult
) => {
  if (item.symbol === 'C' || (item.symbol === 'CE' && result.length === 1)) {
    setResult('0');
    setFirstValue('');
    setSecondValue('');
    setCurrentOperation('');
  }

  if (item.symbol === 'CE' && result.length > 1) {
    if (
      NUMBERS.includes(result[result.length - 1]) &&
      secondValue.length === 0
    ) {
      setFirstValue(firstValue.slice(0, [firstValue.length - 1]));
      setResult(result.slice(0, [result.length - 1]));
    }

    if (NUMBERS.includes(result[result.length - 1]) && secondValue.length > 0) {
      setSecondValue(secondValue.slice(0, [secondValue.length - 1]));
      setResult(result.slice(0, [result.length - 1]));
    }

    if (
      SYMBOLS_NOSPACE.includes(result[result.length - 2]) &&
      currentOperation
    ) {
      setResult(result.slice(0, [result.length - 3]));
      setCurrentOperation('');
    }

    if (
      SYMBOLS_NOSPACE.includes(result[result.length - 2]) &&
      !currentOperation
    ) {
      setFirstValue(firstValue.slice(0, [firstValue.length - 3]));
      setResult(result.slice(0, [result.length - 3]));
    }
  }
};

export default settingOtherSymbols;
