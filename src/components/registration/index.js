import React from 'react';
import styled from 'styled-components';
// import posed from "react-pose";

import Badge from '../../container/generic/badge';
import Input from '../../container/generic/input';
import Button from '../../container/generic/button';
import Dropdown from '../../container/generic/dropdown';
import Text from '../../container/generic/text';
import Search from '../../container/generic/search';
import SearchResult from '../../container/generic/searchResult';

import RegistrateName from './name';

import {
  secondaryColor, primaryColor, deafultLightColor,
} from '../../css';

const RegistrationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  flex-direction: row;
  background: ${primaryColor()};
  height: 100vh;
`;

const RegistrationInformation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  flex-direction: column;
  background: ${secondaryColor()};
  height: 100%;
  width:40%;
`;

const RegistrationSteps = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  flex-direction: column;
  background: ${deafultLightColor()};
  height: 100%;
  width:60%;
`;

const Registration = (props) => {
  const { test } = props;
  return (
    <RegistrationContainer>
      <RegistrationInformation>
        <Text format='h' secondary>
          Test if header appears!
        </Text>
        <Text format='md' secondary>
          Test if medium text appears!
        </Text>
      </RegistrationInformation>
      <RegistrationSteps>
        <RegistrateName {...props}/>
      </RegistrationSteps>
    </RegistrationContainer>
  );
};

export default Registration;
