import React from 'react';
import styled from 'styled-components';

import {
  deafultLightColor,
  deafultDarkColor,
  primaryColor,
  secondaryColor,
  borderRadius,
  padding,
  margin,
} from '../../css';

const Text = styled.p`
  font-size: ${props => (
    (props.format && props.format === 'h' && 28)
    || (props.format && props.format === 'sh' && 24)
    || (props.format && props.format === 'lg' && 20)
    || (props.format && props.format === 'md' && 18)
    || (props.format && props.format === 'sm' && 16)
  )}px;
  padding:0;
  margin:0;
  color: ${props => (
    (props.buttonText && !props.secondary && props.unfilled && primaryColor())
    || (props.buttonText && props.secondary && secondaryColor())
    || (props.buttonText && deafultLightColor())
    || (!props.buttonText && props.secondary && deafultLightColor())
  ) || deafultDarkColor()};
`;

const Txt = props => (
  <Text {...props}>
    {props.children}
  </Text>
);

export default Txt;
