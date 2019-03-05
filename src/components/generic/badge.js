import React from 'react';
import styled from 'styled-components';

import Icon from '../../container/generic/icon';
import Text from '../../container/generic/text';

import {
  deafultLightColor,
  primaryColor,
  secondaryColor,
  elementHeight,
  padding,
  margin,
} from '../../css';

const Container = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${deafultLightColor()};
  background: ${props => (props.secondary && secondaryColor()) || primaryColor()};
  font-size: 1em;
  margin: ${margin}px;
  padding: ${padding / 2}px ${padding}px;
  border: 1px solid ${props => (props.secondary && secondaryColor()) || primaryColor()};
  border-radius: 50px;
  min-height: ${elementHeight / 2}px;
`;

const Bde = (props) => {
  const {
    secondary,
    title,
    onRemoveFromArray,
    page,
    name,
    id,
  } = props;
  return (
    <Container>
      <Text secondary={secondary} format='sm'>
        {title || 'Badge Default'}
      </Text>
      <Icon name='times' onClick={() => onRemoveFromArray(page, name, id)}/>
    </Container>
  );
};

export default Bde;
