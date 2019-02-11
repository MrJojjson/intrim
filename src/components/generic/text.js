import React from 'react';
import styled from 'styled-components';

import {
  primaryColor,
  secondaryColor,
  borderRadius,
  padding,
  margin,
} from '../../css';

const Text = styled.text`
  font-size: ${props => (
    (props.format && props.format === 'h' && 28)
    || (props.format && props.format === 'sh' && 24)
    || (props.format && props.format === 'lg' && 20)
    || (props.format && props.format === 'md' && 18)
    || (props.format && props.format === 'sm' && 16)
  )}px;
`;

const Txt = props => (
  <Text {...props}>
    {props.children}
  </Text>
);

export default Txt;
