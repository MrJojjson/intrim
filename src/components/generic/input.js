import React from 'react';
import styled from 'styled-components';

import {
  primaryColor,
  secondaryColor,
  borderRadius,
  padding,
  margin,
  elementHeight,
} from '../../css';

const Input = styled.input`
  background: '#ffffff';
  color: ${props => (props.secondary && secondaryColor()) || primaryColor()};
  font-size: 1em;
  margin: ${margin}px;
  padding: ${padding}px;
  border: 1px solid ${props => (props.secondary && secondaryColor()) || primaryColor()};
  border-radius: ${borderRadius}px;
  width: ${props => (props.width && props.width) || 25}%;
  min-height: ${elementHeight}px;
`;

const Inp = props => <Input placeholder={'TEST'} {...props}/>;

export default Inp;
