import React from 'react';
import styled from 'styled-components';

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

const Input = styled.input`
  background: '#ffffff';
  color: ${props => (props.secondary && deafultDarkColor()) || primaryColor()};
  font-size: 1em;
  margin: ${margin}px;
  padding: ${padding}px;
  border: ${props => (props.secondary && 'none') || `1px solid ${primaryColor()}`};
  border-radius: ${borderRadius}px;
  width: calc(${props => (props.width <= 100 && props.width) || 35}% - ${padding * 2}px);
  min-height: ${elementHeight}px;
  &::placeholder{
    color: ${fadedDarkColor()}
  }
`;

const Inp = props => <Input {...props}/>;

export default Inp;
