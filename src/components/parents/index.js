import React from 'react';
import styled from 'styled-components';

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

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${props => props.dir || 'row'};
  width: calc(${props => (props.width <= 100 && props.width) || 35} + ${padding * 2}px);
`;

export const ButtonParent = props => (
  <Button {...props}>
    {console.log('props', props)}
    {props.children}
  </Button>
);
