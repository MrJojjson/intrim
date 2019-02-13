import React from 'react';
import styled from 'styled-components';

import { getErrorValidation, getInputValue } from '../../selectors';

import ValidationError from '../../container/generic/validationError';

import {
  deafultDarkColor,
  fadedDarkColor,
  primaryColor,
  secondaryColor,
  borderRadius,
  padding,
  margin,
  elementHeight,
} from '../../css';

const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(${props => (props.width <= 100 && props.width) || 35}% - ${padding * 2}px);
  height: auto;
  margin: ${margin}px;
  min-height: ${elementHeight + padding}px;
`;

const Input = styled.input`
  background: '#ffffff';
  color: ${props => (props.secondary && deafultDarkColor()) || primaryColor()};
  font-size: 1em;
  padding: ${padding}px;
  border: ${props => (props.secondary && 'none') || `1px solid ${primaryColor()}`};
  border-radius: ${borderRadius}px;
  width: 100%;
  min-height: ${elementHeight}px;
  &::placeholder{
    color: ${fadedDarkColor()}
  }
`;

const Inp = (props) => {
  const {
    validate,
    store,
    id,
    changeInputText,
  } = props;
  return (
    <InputContainer {...props}>
      <Input
        onChange={event => changeInputText(id, event.target.value)}
        value={getInputValue(store, id)}
        {...props}
      />
      {validate && <ValidationError show={getErrorValidation(store, id)}/>}
    </InputContainer>
  );
};

export default Inp;
