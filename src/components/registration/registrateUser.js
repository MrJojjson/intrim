import React from 'react';
import styled from 'styled-components';

import Input from '../../container/generic/input';
import Button from '../../container/generic/button';

import {
  secondaryColor, primaryColor, deafultLightColor,
} from '../../css';

const RegistrateUserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const RegistrateUser = (props) => {
  const { validateOnServer, validateOnClient, registrationStep } = props;
  return (
    <RegistrateUserContainer>
      <Input
        id='email'
        width='50'
        placeholder='Email'
        onBlur={event => [
          validateOnServer('email', event.target.value, 'user'),
        ]}
        validate
      />
      <Input
        id='firstname'
        width='50'
        placeholder='Firstname'
        onBlur={event => validateOnClient('firstname', event.target.value, 'user')}
        validate
      />
      <Input
        id='surname'
        width='50'
        placeholder='Surname'
        onBlur={event => validateOnClient('surname', event.target.value, 'user')}
      />
      <Button title="Back" width='50' onClick={() => registrationStep('REGINIT')}/>
      <Button title="Next" width='50' onClick={() => registrationStep(1)}/>
    </RegistrateUserContainer>
  );
};

export default RegistrateUser;