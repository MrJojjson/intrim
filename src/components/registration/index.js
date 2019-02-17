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

import RegistrateUser from './registrateUser';
import RegistrateOrganisation from './registrateOrganisation';
import RegistrationInit from './registrationInit';

import registrationData from './texts';

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
  if (registrationStep === 'NEWUSER') {
    return <RegistrateUser {...props}/>;
  }
  if (registrationStep === 'NEWORGANISATION') {
    return <RegistrateOrganisation {...props}/>;
  }
  if (registrationStep === 'REGINIT') {
    return <RegistrationInit {...props}/>;
  }
  return <RegistrationInit {...props}/>;
};

const DisplayRegistrationText = (props, text) => {
  const { registrationStep } = props.store;
  const data = registrationData.filter(r => r.id === registrationStep).map(reg => reg[text]).toString();
  return data;
};

const Registration = props => (
  <RegistrationContainer>
    <RegistrationInformation>
      <Text format='h' secondary>
        {DisplayRegistrationText(props, 'header')}
      </Text>
      <Text format='md' secondary>
        {DisplayRegistrationText(props, 'subHeader')}
      </Text>
    </RegistrationInformation>
    <RegistrationSteps>
      {DisplayRegistrationStep(props)}
    </RegistrationSteps>
  </RegistrationContainer>
);

export default Registration;
