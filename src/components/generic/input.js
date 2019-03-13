import React from 'react';
import styled from 'styled-components';

import {
  getErrorValidation,
  getInputValue,
  getCheckIfInArrayValidation,
  getPasswordStrength,
} from '../../selectors';
import { checkPasswordStrength } from '../../helpers';

import ValidationError from '../../container/generic/validationError';
import CheckIfInArrayError from '../../container/generic/checkIfInArrayError';

import Button from '../../container/generic/button';
import Icon from '../../container/generic/icon';

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
  fontSize,
} from '../../css';

const extraPadding = props => props.staticPlaceholder || props.secure;

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
  padding: ${padding * 1.5}px;
  padding-left: ${props => (extraPadding(props) && (padding * 7))}px;
  padding-right: ${props => (extraPadding(props) && (padding * 5))}px;
  border: ${props => (props.secondary && 'none') || `1px solid ${primaryColor()}`};
  border-radius: ${borderRadius}px;
  width: 100%;
  max-width:100%;
  min-height: ${elementHeight}px;
  box-sizing: border-box;
  &::placeholder{
    color: ${fadedDarkColor()}
  }
`;

const StaticPlaceholder = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0px;
  top:0;
  background: ${fadedDarkColor()};
  color: ${deafultLightColor()};
  border-bottom-left-radius: ${borderRadius}px;
  border-top-left-radius: ${borderRadius}px;
  min-height: ${elementHeight}px;
  height: 100%;
  width: ${padding * 6}px;
  font-size: ${fontSize * 1.5}px;
`;

const inputValue = (props) => {
  const { store, page, id } = props;
  return getInputValue(store, page, id);
};

const onChangeTextEvent = (event, props) => {
  const {
    changeInputText,
    passwordStrength,
    page,
    id,
  } = props;
  const { value } = event.target;
  if (id && id.toLowerCase() === 'password') {
    const pwdStrength = checkPasswordStrength(value);
    passwordStrength(page, 'passwordStrength', pwdStrength);
  }
  return changeInputText(page, id, value);
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
    addBtnValidation,
    addBtn,
  } = props;
  return (
    <Button
      removeInputText={() => changeInputText(page, id, '')}
      inputValue={inputValue(props)}
      disabled={alreadyAddedToArray(props)}
      addBtn={addBtn}
      addBtnValidation={addBtnValidation}
      page={page}
    />
  );
};

const renderPasswordStrength = (props) => {
  const { store, page } = props;
  const pwdStrength = getPasswordStrength(store, page, 'passwordStrength');
  let iconName = 'dizzy';
  if (pwdStrength === 'weak') {
    iconName = 'grimace';
  } else if (pwdStrength === 'medium') {
    iconName = 'surprise';
  } else if (pwdStrength === 'strong') {
    iconName = 'grin-stars';
  }
  return (
    <StaticPlaceholder>
      <Icon name={iconName}/>
    </StaticPlaceholder>
  );
};

const Inp = (props) => {
  const {
    validate,
    store,
    id,
    page,
    secure,
    addBtn,
    checkIfInArray,
  } = props;
  let { staticPlaceholder } = props;
  if (id === 'password') {
    staticPlaceholder = true;
  }
  return (
    <InputContainer {...props}>
      <Input
        value={inputValue(props)}
        onChange={event => onChangeTextEvent(event, props)}
        onBlur={() => validate && onBlurEvent(props)}
        type={secure ? 'password' : 'text'}
        {...props}
      />
      {validate && <ValidationError show={getErrorValidation(store, page, id)}/>}
      {checkIfInArray && <CheckIfInArrayError show={alreadyAddedToArray(props)}/>}
      {addBtn && renderAddButton(props)}
      {staticPlaceholder && <StaticPlaceholder>{staticPlaceholder}</StaticPlaceholder>}
      {id === 'password' && renderPasswordStrength(props)}
    </InputContainer>
  );
};

export default Inp;
