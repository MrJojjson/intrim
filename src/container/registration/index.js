import React from 'react';
import { connect } from 'react-redux';

import { registrationStep, onAddToArray } from '../../actions';

import { generateGUID } from '../../helpers';

import { validateOnClient, validateOnServer } from '../../validation';

import { registrateOrganisation } from '../../apiservices/registrate';

import RegistrationComponent from '../../components/registration';

const Registration = props => <RegistrationComponent {...props} />;

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  registrationStep: step => dispatch(registrationStep(step)),
  onAddToArray: (page, name, object) => dispatch(onAddToArray(page, name, object)),
  generateGUID: () => generateGUID(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
