import React from 'react';
import styled from 'styled-components';

import Badge from '../../container/generic/badge';
import Input from '../../container/generic/input';
import Button from '../../container/generic/button';
import Dropdown from '../../container/generic/dropdown';
import Text from '../../container/generic/text';
import Search from '../../container/generic/search';
import SearchResult from '../../container/generic/searchResult';

import {
} from '../../css';

const PanelMiddleContainer = styled.div`
  display: flex;
  align-self: flex-end;
  align-items: center;
  flex-direction: column;
  background: #ffffff;
  width: 100%;
  height: 100%;
  overflow: auto;
`;

const MiddlePanel = (props) => {
  const { test } = props;
  return (
    <PanelMiddleContainer>
      <Text format='h'>
        Test if header appears!
      </Text>
      <Text format='sh'>
        Test if subheader appears!
      </Text>
      <Text format='lg'>
        Test if large text appears!
      </Text>
      <Text format='md'>
        Test if medium text appears!
      </Text>
      <Text format='sm'>
        Test if small text appears!
      </Text>
      <Badge/>
      <Input placeholder='Default width'/>
      <Input width='25' placeholder='25 % width'/>
      <Input width='50' placeholder='50 % width'/>
      <Input width='75' placeholder='75 % width'/>
      <Button/>
      <Dropdown/>
      <Search/>
      <SearchResult/>
    </PanelMiddleContainer>
  );
};

export default MiddlePanel;
