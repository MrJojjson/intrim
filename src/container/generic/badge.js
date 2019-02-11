import React from 'react';
import { connect } from 'react-redux';

import BadgeComponent from '../../components/generic/badge';

const Badge = props => <BadgeComponent {...props} />;

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Badge);
