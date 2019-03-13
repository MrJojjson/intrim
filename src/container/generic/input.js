import React from 'react';
import { connect } from 'react-redux';

import InputComponent from '../../components/generic/input';

import { onChangeInput, onAddPasswordStrength } from '../../actions';

import { validateOnClient, validateOnServer } from '../../validation';

const Input = props => <InputComponent {...props} />;

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  changeInputText: (page, id, value) => dispatch(onChangeInput(page, id, value)),
  passwordStrength: (page, id, value) => dispatch(onAddPasswordStrength(page, id, value)),
  validateOnServer: (page, id, value, type) => validateOnServer(dispatch, page, id, value, type),
  validateOnClient: (page, id, value, type) => validateOnClient(dispatch, page, id, value, type),
});

export default connect(mapStateToProps, mapDispatchToProps)(Input);
