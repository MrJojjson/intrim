import React from 'react';
import styled from 'styled-components';

import Input from '../../container/generic/input';
import Button from '../../container/generic/button';

import { registrateOrganisation } from '../../apiservices/registrate';
import { getInputValues } from '../../selectors';

const RegistrateOrganisationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const PAGE = 'organisation';

export const RegistrateOrganisation = (props) => {
  const { store, registrationStep, onAddToArray } = props;
  const registrateValues = getInputValues(store, PAGE, ['name', 'email', 'password']);
  return (
    <RegistrateOrganisationContainer>
      <Input
        id='name'
        width='50'
        placeholder='Organisation´s name'
        page={PAGE}
        validate='onserver'
        addBtn={value => onAddToArray(PAGE, 'emailEndings', value)}
      />
      <Input
        id='email'
        width='50'
        placeholder='Admin email'
        page={PAGE}
        validate='onserver'
      />
      <Input
        id='password'
        width='50'
        placeholder='Organisation´s admin password'
        page={PAGE}
        secure
        validate='onserver'
      />
      <Button title="Back" width='50' onClick={() => registrationStep('REG_INIT')}/>
      <Button
        title="Next"
        width='50'
        // onClick={() => registrateOrganisation(registrateValues)}
        onClick={() => registrationStep('REG_EMAIL_ENDINGS')}
        validation={['name', 'email', 'password']}
        page={PAGE}
      />
    </RegistrateOrganisationContainer>
  );
};

export const EmailEndings = (props) => {
  const { store, registrationStep, onAddToArray } = props;
  const registrateValues = getInputValues(store, PAGE, ['emailEndings']);
  return (
    <RegistrateOrganisationContainer>
      <Input
        id='emailEndings'
        width='50'
        placeholder='Email endings'
        page={PAGE}
        validate='onclient'
      />
      <Button title="Back" width='50' onClick={() => registrationStep('REG_NEW_ORGANISATION')}/>
      <Button
        title="Next"
        width='50'
        onClick={() => registrateOrganisation(registrateValues)}
      />
    </RegistrateOrganisationContainer>
  );
};
