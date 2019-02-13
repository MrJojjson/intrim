import React from 'react';
import { connect } from 'react-redux';

import { registrationStep } from '../../actions';

import { validateOnClient, validateOnServer } from '../../validation';

import RegistrationComponent from '../../components/registration';

const Registration = props => <RegistrationComponent {...props} />;

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  validateOnServer: (id, value) => validateOnServer(dispatch, id, value),
  validateOnClient: (id, value) => validateOnClient(dispatch, id, value),
  registrationStep: step => dispatch(registrationStep(step)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
