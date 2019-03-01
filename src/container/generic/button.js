import React from 'react';
import { connect } from 'react-redux';

import ButtonComponent from '../../components/generic/button';

import { validateButton } from '../../validation';

const Button = props => <ButtonComponent {...props} />;

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  validateButton: (store, page, validationArray) => validateButton(store, page, validationArray),
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
