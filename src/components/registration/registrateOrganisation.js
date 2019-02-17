import React from 'react';
import styled from 'styled-components';

import Input from '../../container/generic/input';
import Button from '../../container/generic/button';

import {
  secondaryColor, primaryColor, deafultLightColor,
} from '../../css';

const RegistrateOrganisationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const RegistrateOrganisation = (props) => {
  const { validateOnServer, registrationStep } = props;
  return (
    <RegistrateOrganisationContainer>
      <Input
        id='organisationName'
        width='50'
        placeholder='Organisation´s name'
        onBlur={event => validateOnServer('organisationName', event.target.value, 'organisation')}
      />
      <Button title="Next" width='50' onClick={() => registrationStep('REGINIT')}/>
      {/* <Button title="Next" width='50' onClick={() => registrationStep(1)}/> */}
    </RegistrateOrganisationContainer>
  );
};

export default RegistrateOrganisation;
