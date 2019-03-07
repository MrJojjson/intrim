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
  background: ${props => (props.secondary && secondaryColor()) || primaryColor()};
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
  right: ${-padding}px;
  top:0;
  color: ${deafultLightColor()};
  background: ${props => (props.secondary && secondaryColor()) || primaryColor()};
  padding: ${padding}px;
  border: 1px solid ${props => (props.secondary && secondaryColor()) || primaryColor()};
  border-bottom-right-radius: ${borderRadius}px;
  border-top-right-radius: ${borderRadius}px;
  cursor: pointer;
  min-height: ${elementHeight + padding * 2}px;
  height: 100%;
  width: 40px;
  ${props => props.valid !== undefined && !props.valid && disabled};
  ${props => props.disabled && disabled};
`;

const valid = (props) => {
  const {
    store,
    page,
    validation,
    validateButton,
  } = props;
  return validateButton(store, page, validation);
};

const Btn = (props) => {
  const {
    title,
    onClick,
    validation,
    addBtn,
    removeInputText,
    inputValue,
  } = props;
  if (addBtn) {
    return (
      <AddButton {...props} onClick={() => [addBtn(inputValue), removeInputText()]}>
        <Icon name='plus'/>
      </AddButton>
    );
  }
  return (
    <Button {...props} onClick={onClick} valid={validation && valid(props)}>
      <Text format='md' secondary>
        {title || 'Button Default'}
      </Text>
    </Button>
  );
};

export default Btn;
