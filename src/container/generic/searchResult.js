import React from 'react';
import { connect } from 'react-redux';

import SearchResultComponent from '../../components/generic/searchResult';

const SearchResult = props => <SearchResultComponent {...props} />;

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
