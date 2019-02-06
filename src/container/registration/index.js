import React from 'react';
import { connect } from 'react-redux';

import RegistrationComponent from '../../components/registration';

const Registration = props => <RegistrationComponent {...props} />;

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
