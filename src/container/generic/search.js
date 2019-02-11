import React from 'react';
import { connect } from 'react-redux';

import SearchComponent from '../../components/generic/search';

const Search = props => <SearchComponent {...props} />;

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
