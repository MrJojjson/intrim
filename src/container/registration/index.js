import React from 'react';
import { connect } from 'react-redux';

import { validateOnClient, validateOnServer } from '../../validation';

import RegistrationComponent from '../../components/registration';


const Registration = props => <RegistrationComponent {...props} />;

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  validateOnServer: (id, value) => validateOnServer(id, value),
  validateOnClient: (id, value) => validateOnClient(dispatch, id, value),
});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
