import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  primaryColor,
  secondaryColor,
  iconSize,
  borderRadius,
  padding,
  margin,
  elementHeight,
} from '../../css';

const Icon = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${props => (props.secondary && secondaryColor()) || primaryColor()};
  font-size: ${iconSize}px;
  border: none;
  margin: 0px ${margin / 2}px;
`;

const Icn = props => (
  <Icon>
    <FontAwesomeIcon icon={props.name || 'envelope'} size={iconSize}/>
  </Icon>
);

export default Icn;
