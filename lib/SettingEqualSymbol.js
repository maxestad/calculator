import { SYMBOLS_NOSPACE } from '../constants';
import { evaluate } from 'mathjs';

const settingEqualSymbol = (
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
  if (item.symbol === '=') {
    setFirstValue('');
    setSecondValue('');
    setCurrentOperation('');

    if (
      (firstValue && currentOperation && secondValue) ||
      (result.length > 1 &&
        !SYMBOLS_NOSPACE.includes(result[result.length - 2]))
    ) {
      const currentResult = +evaluate(
        firstValue + currentOperation + secondValue
      ).toFixed(3);

      setResult(`${currentResult}`);
      setFirstValue(`${currentResult}`);
    }

    if (
      result.length > 1 &&
      SYMBOLS_NOSPACE.includes(result[result.length - 2])
    ) {
      const currentResult = +evaluate(
        result.slice(0, [result.length - 3])
      ).toFixed(3);
      setResult(currentResult);
      setFirstValue(`${currentResult}`);
    }
  }
};

export default settingEqualSymbol;
