import React from 'react';
import { connect } from 'react-redux';

import InputComponent from '../../components/generic/input';

const Input = props => <InputComponent {...props} />;

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Input);
