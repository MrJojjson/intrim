import React from 'react';
import styled from 'styled-components';

import Icon from '../../container/generic/icon';

import {
  deafultLightColor,
  fadedLightColor,
  primaryColor,
  secondaryColor,
  borderRadius,
  padding,
  margin,
  elementHeight,
} from '../../css';

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => (props.secondary && secondaryColor()) || primaryColor()};
  color: ${props => (props.secondary && secondaryColor()) || primaryColor()};
  font-size: 1em;
  margin: ${margin}px;
  border: 1px solid ${props => (props.secondary && secondaryColor()) || primaryColor()};
  border-radius: ${borderRadius}px;
  min-height: ${elementHeight}px;
  padding: ${padding}px;
`;

const SearchField = styled.input`
  display: flex;
  background: ${props => (props.secondary && secondaryColor()) || primaryColor()};
  color: ${deafultLightColor()};
  font-size: 1em;
  border: none;
  z-index: 1;
  height: 100%;
  padding: 0px ${padding}px;
  min-height: ${elementHeight}px;

  &::placeholder{
    color: ${fadedLightColor()};
  }
`;

const Bde = props => (
  <Container>
    <Icon name='search'/>
    <SearchField placeholder={props.placeholder || 'Search Placeholder'} />
    {props.value && <Icon name='times'/>}
  </Container>
);

export default Bde;
