import React from 'react';
import styled from 'styled-components';

import { validateButton } from '../../validation';

import Text from '../../container/generic/text';

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

const Btn = (props) => {
  const {
    store,
    page,
    validation,
    title,
    onClick,
  } = props;

  return (
    <Button {...props} onClick={onClick} valid={validation && page && validateButton(store, page, validation)}>
      <Text format='md' secondary>
        {title || 'Button Default'}
      </Text>
    </Button>
  );
};

export default Btn;
