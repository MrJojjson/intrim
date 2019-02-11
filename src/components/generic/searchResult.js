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

const SearchResult = styled.div`
  background: '#eeeeee';
  width: 90%;
  padding: ${padding}px;
  border: 1px solid ${props => (props.secondary && secondaryColor()) || primaryColor()};
  border-radius: ${borderRadius}px;
  min-height: ${elementHeight}px;
`;

const SrhResult = props => (
<SearchResult {...props}>
  {props.children}
</SearchResult>
);

export default SrhResult;
