import React from 'react';
import { connect } from 'react-redux';

import ButtonComponent from '../../components/generic/button';

const Button = props => <ButtonComponent {...props} />;

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
