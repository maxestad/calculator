import React, { useState } from 'react';
import styled from 'styled-components';

import {
  COLORS,
  FONT_SIZES,
  BUTTONS,
  NUMBERS,
  BREAKPOINTS,
} from '../constants';
import handleButtonClick from '../lib/handleButtonClick';

const Container = styled.div`
  height: 600px;
  width: 380px;
  display: flex;
  border: 1px ${COLORS.grey2} solid;
  border-radius: 25px;
  background-color: ${COLORS.black};
  flex-direction: column;

  @media (max-width: ${BREAKPOINTS.phone}) {
    height: 450px;
    width: 300px;
  }

  @media (max-height: ${BREAKPOINTS.phone}) and (min-width: ${BREAKPOINTS.phone}) {
    height: 300px;
    width: 450px;
  }
`;

const ResultContainer = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  background-color: ${COLORS.black};
  border-radius: 25px;
  align-items: center;
  justify-content: flex-end;
  white-space: nowrap;
  overflow: auto;
  margin: 15px 0;
`;

const Result = styled.div`
  flex-direction: row;
  max-width: 100%;
  padding: 0 20px;
  color: ${COLORS.grey2};
  font-size: ${FONT_SIZES.huge};
  font-weight: 300;

  @media (max-width: ${BREAKPOINTS.phone}) {
    font-size: ${FONT_SIZES.big};
  }
`;

const ButtonContainer = styled.div`
  height: auto;
  width: auto;
  display: grid;
  gap: 10px;
  grid-template-columns: auto auto auto auto;
  grid-template-rows: auto auto auto auto auto;
  justify-content: center;
  padding-bottom: 20px;
`;

const StyledButton = styled.div`
  height: 74px;
  width: 74px;
  display: flex;
  cursor: pointer;
  color: ${({ isC }) => (isC ? COLORS.grey1 : COLORS.grey2)};
  background-color: ${({ isSymbol, isC }) =>
    isSymbol ? COLORS.blue1 : isC ? COLORS.grey3 : COLORS.grey1};
  border-radius: 50%;
  font-size: ${FONT_SIZES.small};
  justify-content: center;
  align-items: center;
  user-select: none;
  padding-bottom: ${({ isSymbol }) => isSymbol && '4px'};

  @media (max-width: ${BREAKPOINTS.phone}) {
    height: 55px;
    width: 55px;
    font-size: ${FONT_SIZES.tiny};
  }

  &:active {
    background-color: ${COLORS.grey2};
    color: ${COLORS.grey1};
  }

  &:nth-child(16) {
    grid-row: span 2;
    height: 158px;
    width: 74px;
    border-radius: 40px;

    @media (max-width: ${BREAKPOINTS.phone}) {
      height: 120px;
      width: 55px;
    }
  }

  &:nth-child(17) {
    grid-column: span 2;
    height: 74px;
    width: 158px;
    border-radius: 40px;
    justify-content: flex-start;
    padding-left: 30px;

    @media (max-width: ${BREAKPOINTS.phone}) {
      height: 55px;
      width: 120px;
    }
  }
`;

const Calculator = () => {
  const [result, setResult] = useState('0');
  const [firstValue, setFirstValue] = useState('');
  const [currentOperation, setCurrentOperation] = useState('');
  const [secondValue, setSecondValue] = useState('');

  console.log({ firstValue, currentOperation, secondValue, result });

  return (
    <Container>
      <ResultContainer>
        <Result>{result}</Result>
      </ResultContainer>
      <ButtonContainer>
        {BUTTONS.map((item) => (
          <StyledButton
            key={item.name}
            isSymbol={
              !NUMBERS.includes(item.name) &&
              item.name !== 'C' &&
              item.name !== 'CE'
            }
            isC={item.name === 'C' || item.name === 'CE'}
            onClick={() => {
              handleButtonClick(
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
            }}
          >
            {item.name}
          </StyledButton>
        ))}
      </ButtonContainer>
    </Container>
  );
};

export default Calculator;
