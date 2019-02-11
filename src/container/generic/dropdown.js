import React from 'react';
import { connect } from 'react-redux';

import DropdownComponent from '../../components/generic/dropdown';

const Dropdown = props => <DropdownComponent {...props} />;

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
