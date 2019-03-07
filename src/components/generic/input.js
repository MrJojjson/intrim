import React from 'react';
import styled from 'styled-components';

import { getErrorValidation, getInputValue, getCheckIfInArrayValidation } from '../../selectors';

import ValidationError from '../../container/generic/validationError';
import CheckIfInArrayError from '../../container/generic/checkIfInArrayError';

import Button from './button';

import {
  deafultDarkColor,
  deafultLightColor,
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

const inputValue = (props) => {
  const { store, page, id } = props;
  return getInputValue(store, page, id);
};

const onBlurEvent = (props) => {
  const {
    page,
    id,
    validate,
    validateOnServer,
    validateOnClient,
  } = props;

  const value = inputValue(props);
  if (validate.toLowerCase() === 'onclient') {
    return validateOnClient(page, id, value);
  }
  return validateOnServer(page, id, value);
};

const alreadyAddedToArray = (props) => {
  const { store, page, checkIfInArray } = props;
  return getCheckIfInArrayValidation(store, page, checkIfInArray, inputValue(props));
};

const renderAddButton = (props) => {
  const {
    id,
    changeInputText,
    page,
  } = props;
  return (
    <Button
      {...props}
      removeInputText={() => changeInputText(page, id, '')}
      inputValue={inputValue(props)}
      disabled={alreadyAddedToArray(props)}
    />
  );
};

const Inp = (props) => {
  const {
    validate,
    store,
    id,
    changeInputText,
    page,
    secure,
    addBtn,
    checkIfInArray,
  } = props;
  return (
    <InputContainer {...props}>
      <Input
        value={inputValue(props)}
        onChange={event => changeInputText(page, id, event.target.value)}
        onBlur={() => validate && onBlurEvent(props)}
        type={secure ? 'password' : 'text'}
        {...props}
      />
      {validate && <ValidationError show={getErrorValidation(store, page, id)}/>}
      {checkIfInArray && <CheckIfInArrayError show={alreadyAddedToArray(props)}/>}
      {addBtn && renderAddButton(props)}
    </InputContainer>
  );
};

export default Inp;
