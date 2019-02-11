import React from 'react';
import styled from 'styled-components';

import Icon from '../../container/generic/icon';
import Text from '../../container/generic/text';

import {
  primaryColor,
  secondaryColor,
  elementHeight,
  padding,
  margin,
} from '../../css';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: '#ffffff';
  color: ${props => (props.secondary && secondaryColor()) || primaryColor()};
  font-size: 1em;
  margin: ${margin}px;
  padding: ${padding / 2}px ${padding}px;
  border: 1px solid ${props => (props.secondary && secondaryColor()) || primaryColor()};
  border-radius: 50px;
  min-height: ${elementHeight / 2}px;
`;

const Bde = props => (
  <Container>
    <Text format='sm'>
      {props.title || 'Badge Default'}
    </Text>
    <Icon name='times'/>
  </Container>
);

export default Bde;
