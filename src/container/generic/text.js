import React from 'react';
import { connect } from 'react-redux';

import TextComponent from '../../components/generic/text';

const Text = props => <TextComponent {...props} />;

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Text);
