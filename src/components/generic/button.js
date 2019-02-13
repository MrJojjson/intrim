import React from 'react';
import styled from 'styled-components';

import Text from '../../container/generic/text';

import {
  deafultLightColor,
  primaryColor,
  secondaryColor,
  borderRadius,
  padding,
  margin,
  elementHeight,
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
`;

const Btn = props => (
  <Button {...props} onClick={props.onClick}>
    <Text format='md' secondary>
      {props.title || 'Button Default'}
    </Text>
  </Button>
);

export default Btn;
