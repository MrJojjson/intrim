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

const RegistrateOrganisation = (props) => {
  const { validateOnServer, registrationStep, store } = props;
  const registrateValues = getInputValues(store, PAGE, ['organisationName', 'organisationAdminEmail', 'organisationPassword']);
  console.log('registrate values', registrateValues);
  return (
    <RegistrateOrganisationContainer>
      <Input
        id='organisationName'
        width='50'
        placeholder='Organisation´s name'
        page={PAGE}
        onBlur={event => validateOnServer(PAGE, 'name', event.target.value, 'organisation')}
      />
      <Input
        id='organisationAdminEmail'
        width='50'
        placeholder='Admin email'
        page={PAGE}
        onBlur={event => validateOnServer(PAGE, 'email', event.target.value, 'organisation')}
        validate
      />
      <Input
        id='organisationPassword'
        width='50'
        placeholder='Organisation´s admin password'
        page={PAGE}
        onBlur={event => validateOnServer(PAGE, 'password', event.target.value, 'organisation')}
      />
      <Button title="Back" width='50' onClick={() => registrationStep('REGINIT')}/>
      <Button
        title="Next"
        width='50'
        onClick={() => registrateOrganisation(registrateValues)}
        validation={['organisationName']}
      />
    </RegistrateOrganisationContainer>
  );
};

export default RegistrateOrganisation;
