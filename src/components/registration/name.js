import React from 'react';
import styled from 'styled-components';

import Input from '../../container/generic/input';
import Button from '../../container/generic/button';

import {
  secondaryColor, primaryColor, deafultLightColor,
} from '../../css';

const RegistrateNameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const RegistrateName = (props) => {
  const { validateOnServer, validateOnClient } = props;
  return (
    <RegistrateNameContainer>
      <Input
        id='email'
        width='50'
        placeholder='Email'
        onBlur={event => validateOnServer('email', event.target.value)}
      />
      <Input
        width='50'
        placeholder='Firstname'
        onBlur={event => validateOnClient('firstname', event.target.value)}
      />
      <Input
        width='50'
        placeholder='Surname'
        onBlur={event => validateOnClient('surname', event.target.value)}
      />
      <Button title="Next" width='50' />
    </RegistrateNameContainer>
  );
};

export default RegistrateName;
