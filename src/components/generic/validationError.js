import React from 'react';
import styled from 'styled-components';

import Icon from '../../container/generic/icon';
import Text from '../../container/generic/text';

import {
  deafultLightColor,
  secondaryColor,
  borderRadius,
  padding,
  errorColor,
} from '../../css';

const ValidationError = styled.span`
  color: ${deafultLightColor()};
  position: absolute;
  bottom: -${padding}px;
  width: 100%;
  background: ${errorColor()};
  padding: 1px ${padding + 1}px;
  min-height: ${props => (props.show && padding * 2) || 0}px;
  max-height: ${props => (props.show && padding * 2) || 0}px;
  visibility: ${props => (props.show && 'visible') || 'hidden'};
  opacity: ${props => (props.show && 1) || 0};
  text-align: center;
  border-bottom-left-radius: ${borderRadius}px;
  border-bottom-right-radius: ${borderRadius}px;
  transition: all 0.35s;
`;

const VldErr = props => (
  <ValidationError {...props}>
    <Text secondary>{props.show || 'Test ifall det ser någorlunda bra ut'}</Text>
  </ValidationError>
);

export default VldErr;
