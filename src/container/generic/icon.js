import React from 'react';
import { connect } from 'react-redux';

import IconComponent from '../../components/generic/icon';

const Icon = props => <IconComponent {...props} />;

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Icon);
