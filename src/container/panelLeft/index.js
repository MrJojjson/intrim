import React from 'react';
import { connect } from 'react-redux';

import LeftPanelComponent from '../../components/panelLeft';

const LeftPanel = props => <LeftPanelComponent {...props} />;

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftPanel);
