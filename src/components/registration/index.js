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
import RegistrationOrg from './organisation';

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

const DisplayRegistrationStep = (props) => {
  const { registrationStep } = props.store;
  if (registrationStep === undefined || registrationStep === null || registrationStep === 0) {
    return <RegistrateName {...props}/>;
  }
  if (registrationStep === 1) {
    return <RegistrationOrg {...props}/>;
  }
  return null;
};

const Registration = props => (
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
      {DisplayRegistrationStep(props)}
    </RegistrationSteps>
  </RegistrationContainer>
);

export default Registration;
