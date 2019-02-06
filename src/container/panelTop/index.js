import React from 'react';
import { connect } from 'react-redux';

import TopPanelComponent from '../../components/panelTop';

const TopPanel = props => <TopPanelComponent {...props} />;

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(TopPanel);
