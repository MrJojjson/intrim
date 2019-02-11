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

const Dropdown = styled.select.attrs({
  name: `${props => props.name || 'defaultName'}`,
})`
  background: '#ffffff';
  color: ${props => (props.secondary && secondaryColor()) || primaryColor()};
  font-size: 1em;
  margin: ${margin}px;
  padding: ${padding}px;
  border: 1px solid ${props => (props.secondary && secondaryColor()) || primaryColor()};
  border-radius: ${borderRadius}px;
  min-height: ${elementHeight}px;
`;

const options = mapOptions => mapOptions.map(o => <option value={o.value}>{o.name}</option>);

const Drd = props => (
  <Dropdown {...props}>
    {props.options && options(props.options)}
    <option value="val1">France</option>
    <option value="val2">Peru</option>
    <option value="val3">Australia</option>
    <option value="val4">Denmark</option>
  </Dropdown>
);

export default Drd;
