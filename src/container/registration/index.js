import React from 'react';
import { connect } from 'react-redux';

import { registrationStep } from '../../actions';

import { validateOnClient, validateOnServer } from '../../validation';

import { registrateOrganisation } from '../../apiservices/registrate';

import RegistrationComponent from '../../components/registration';

const Registration = props => <RegistrationComponent {...props} />;

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  validateOnServer: (page, id, value, type) => validateOnServer(dispatch, page, id, value, type),
  validateOnClient: (page, id, value, type) => validateOnClient(dispatch, page, id, value, type),
  registrationStep: step => dispatch(registrationStep(step)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
