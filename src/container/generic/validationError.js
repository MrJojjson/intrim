import React from 'react';
import { connect } from 'react-redux';

import ValidationError from '../../components/generic/validationError';

const Error = props => <ValidationError {...props} />;

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Error);
