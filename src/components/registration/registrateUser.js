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

const PAGE = 'user';

const RegistrateUser = (props) => {
  const { registrationStep } = props;
  return (
    <RegistrateUserContainer>
      <Input
        id='email'
        width='50'
        placeholder='Email'
        page={PAGE}
        validate='onserver'
      />
      <Input
        id='firstname'
        width='50'
        placeholder='Firstname'
        page={PAGE}
        validate='onclient'
      />
      <Input
        id='surname'
        width='50'
        placeholder='Surname'
        page={PAGE}
        validate='onclient'
      />
      <Button
        title="Back"
        width='50'
        onClick={() => registrationStep('REGINIT')}
        page={PAGE}
      />
      <Button
        title="Next"
        width='50'
        onClick={() => registrationStep('REGINIT')}
        validation={['email', 'firstname', 'surname']}
        page={PAGE}
      />
    </RegistrateUserContainer>
  );
};

export default RegistrateUser;
