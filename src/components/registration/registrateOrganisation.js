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
  const { store, registrationStep } = props;
  const registrateValues = getInputValues(store, PAGE, ['organisationName', 'organisationAdminEmail', 'organisationPassword']);
  return (
    <RegistrateOrganisationContainer>
      <Input
        id='name'
        width='50'
        placeholder='Organisation´s name'
        page={PAGE}
        validate='onserver'
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
