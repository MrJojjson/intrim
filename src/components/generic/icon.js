import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  deafultLightColor,
  primaryColor,
  secondaryColor,
  iconSize,
  margin,
} from '../../css';

const Icon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${props => (props.primary && primaryColor()) || (props.secondary && secondaryColor()) || deafultLightColor()};
  border: none;
  margin: 0px ${margin / 2}px;
  background: transparent;
`;

const Icn = props => (
  <Icon {...props}>
    <FontAwesomeIcon icon={props.name || 'envelope'} size={iconSize}/>
  </Icon>
);

export default Icn;
