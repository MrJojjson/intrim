import React from 'react';
import { connect } from 'react-redux';

import MiddlePanelComponent from '../../components/panelMiddle';

const MiddlePanel = props => <MiddlePanelComponent {...props} />;

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(MiddlePanel);
