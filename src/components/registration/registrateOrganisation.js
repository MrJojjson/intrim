import React from 'react';
import styled from 'styled-components';

import Badge from '../../container/generic/badge';
import Button from '../../container/generic/button';
import Input from '../../container/generic/input';

import { ButtonParent } from '../parents';

import { registrateOrganisation } from '../../apiservices/registrate';
import { getInputValues, getArray } from '../../selectors';

const RegistrateOrganisationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const EmailEndingsUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 0px;
  margin: 0px;
  list-style-type: none;
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
        placeholder='Admin password'
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

const renderEmailEndingBadges = (props) => {
  const { store } = props;
  const emailEndings = getArray(store, PAGE, 'emailEndings');
  if (!emailEndings || emailEndings.length <= 0) {
    return null;
  }
  return emailEndings && emailEndings.map(endings => (
    <Badge page={PAGE} name='emailEndings' id={endings.id} key={endings.id} title={endings.value} secondary/>
  ));
};

export const EmailEndings = (props) => {
  const {
    store,
    registrationStep,
    onAddToArray,
    generateGUID,
  } = props;
  const registrateValues = getInputValues(store, PAGE, ['emailEndings']);
  return (
    <RegistrateOrganisationContainer>
      <Input
        id='emailEndingsInput'
        width='50'
        placeholder='Email endings'
        page={PAGE}
        validate='onclient'
        addBtn={value => onAddToArray(PAGE, 'emailEndings', { value, id: generateGUID() })}
        addBtnValidation={['emailEndingsInput']}
        checkIfInArray='emailEndings'
        staticPlaceholder='@'
      />
      <EmailEndingsUl>
        {renderEmailEndingBadges(props)}
      </EmailEndingsUl>
      <ButtonParent width='100'>
        <Button
          title="Back"
          width='100'
          unfilled
          onClick={() => registrationStep('REG_NEW_ORGANISATION')}
        />
        <Button
          title="Next"
          width='100'
          onClick={() => registrateOrganisation(registrateValues)}
        />
      </ButtonParent>
    </RegistrateOrganisationContainer>
  );
};
