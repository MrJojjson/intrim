import React from 'react';
import styled from 'styled-components';

import Input from '../../container/generic/input';
import Button from '../../container/generic/button';

import {
  secondaryColor, primaryColor, deafultLightColor,
} from '../../css';

const RegistrationInitContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const RegistrateInit = (props) => {
  const { registrationStep } = props;
  return (
    <RegistrationInitContainer>
      <Button title="New user" width='50' onClick={() => registrationStep('REG_NEW_USER')}/>
      <Button title="New organisation" width='50' onClick={() => registrationStep('REG_NEW_ORGANISATION')}/>
    </RegistrationInitContainer>
  );
};

export default RegistrateInit;
