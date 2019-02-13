import React from 'react';
import styled from 'styled-components';

import Input from '../../container/generic/input';
import Button from '../../container/generic/button';

import {
  secondaryColor, primaryColor, deafultLightColor,
} from '../../css';

const RegistrateOrgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const RegistrateOrg = (props) => {
  const { validateOnServer, registrationStep } = props;
  return (
    <RegistrateOrgContainer>
      <Input
        id='org'
        width='75'
        placeholder='Org'
        onBlur={event => validateOnServer('org', event.target.value)}
      />
      <Button title="Back" width='80' onClick={() => registrationStep(-1)}/>
      <Button title="Next" width='80' onClick={() => registrationStep(1)}/>
    </RegistrateOrgContainer>
  );
};

export default RegistrateOrg;
