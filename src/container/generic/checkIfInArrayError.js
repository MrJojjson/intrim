import React from 'react';
import { connect } from 'react-redux';

import CheckIfInArrayError from '../../components/generic/checkIfInArrayError';

const ArrayError = props => <CheckIfInArrayError {...props} />;

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ArrayError);
