import React from 'react';
import { connect } from 'react-redux';

import { registrationStep } from '../../actions';

import { validateOnClient, validateOnServer } from '../../validation';

import RegistrationComponent from '../../components/registration';

const Registration = props => <RegistrationComponent {...props} />;

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  validateOnServer: (id, value, type) => validateOnServer(dispatch, id, value, type),
  validateOnClient: (id, value, type) => validateOnClient(dispatch, id, value, type),
  registrationStep: step => dispatch(registrationStep(step)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
