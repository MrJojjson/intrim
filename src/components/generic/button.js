import React from 'react';
import styled from 'styled-components';

import Text from '../../container/generic/text';
import Icon from '../../container/generic/icon';

import {
  deafultLightColor,
  primaryColor,
  secondaryColor,
  disabledColor,
  borderRadius,
  padding,
  margin,
  elementHeight,
  disabled,
} from '../../css';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${deafultLightColor()};
  background: ${props => (props.unfilled ? 'none' : props.secondary && secondaryColor()) || primaryColor()};
  margin: ${margin}px;
  padding: ${padding}px;
  border: 1px solid ${props => (props.secondary && secondaryColor()) || primaryColor()};
  border-radius: ${borderRadius}px;
  cursor: pointer;
  min-height: ${elementHeight + padding * 2}px;
  width: ${props => (props.width <= 100 && props.width) || 35}%;
  ${props => props.valid !== undefined && !props.valid && disabled};
`;

const AddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0px;
  top:0;
  color: ${deafultLightColor()};
  background: ${props => (props.unfilled ? 'none' : props.secondary && secondaryColor()) || primaryColor()};
  padding: ${padding}px;
  border: 1px solid ${props => (props.secondary && secondaryColor()) || primaryColor()};
  border-bottom-right-radius: ${borderRadius}px;
  border-top-right-radius: ${borderRadius}px;
  cursor: pointer;
  height: 100%;
  width: ${padding * 4}px;
  ${props => props.valid !== undefined && !props.valid && disabled};
  ${props => props.disabled && disabled};
`;

const valid = (props) => {
  const {
    store,
    page,
    validation,
    addBtnValidation,
    validateButton,
  } = props;
  const validationArray = validation || addBtnValidation || [];
  return validateButton(store, page, validationArray);
};

const Btn = (props) => {
  const {
    title,
    onClick,
    validation,
    addBtn,
    removeInputText,
    inputValue,
    addBtnValidation,
  } = props;
  if (addBtn) {
    const inputVal = `@${inputValue}`;
    return (
      <AddButton
        {...props}
        onClick={() => [addBtn(inputVal), removeInputText()]}
        valid={addBtnValidation && valid(props)}
      >
        <Icon name='plus'/>
      </AddButton>
    );
  }
  return (
    <Button {...props} onClick={onClick} valid={validation && valid(props)}>
      <Text format='md' buttonText secondary={props.secondary} unfilled={props.unfilled}>
        {title || 'Button Default'}
      </Text>
    </Button>
  );
};

export default Btn;
