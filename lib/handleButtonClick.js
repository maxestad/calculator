import settingEqualSymbol from './settingEqualSymbol';
import settingOtherSymbols from './settingOtherSymbols';
import settingSecondValue from './settingSecondValue';
import settingOperator from './settingOperator';
import settingFirstValue from './settingFirstValue';

const handleButtonClick = (
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
  settingFirstValue(
    item,
    firstValue,
    setFirstValue,
    currentOperation,
    secondValue,
    result,
    setResult
  );

  settingOperator(
    item,
    firstValue,
    setFirstValue,
    currentOperation,
    setCurrentOperation,
    secondValue,
    setSecondValue,
    setResult
  );

  settingSecondValue(
    item,
    firstValue,
    currentOperation,
    secondValue,
    setSecondValue,
    setResult
  );

  settingEqualSymbol(
    item,
    firstValue,
    setFirstValue,
    currentOperation,
    setCurrentOperation,
    secondValue,
    setSecondValue,
    result,
    setResult
  );

  settingOtherSymbols(
    item,
    firstValue,
    setFirstValue,
    currentOperation,
    setCurrentOperation,
    secondValue,
    setSecondValue,
    result,
    setResult
  );
};

export default handleButtonClick;
