import React from 'react';
import styled from 'styled-components';

import Text from '../../container/generic/text';

import {
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
  background: '#ffffff';
  color: ${props => (props.secondary && secondaryColor()) || primaryColor()};
  margin: ${margin}px;
  padding: ${padding}px;
  border: 1px solid ${props => (props.secondary && secondaryColor()) || primaryColor()};
  border-radius: ${borderRadius}px;
  cursor: pointer;
  min-height: ${elementHeight + padding * 2}px;
`;

const Btn = props => (
  <Button value="test" {...props}>
    <Text format='md'>
      {props.title || 'Button Default'}
    </Text>
  </Button>
);

export default Btn;
