import React from 'react';
import { connect } from 'react-redux';

import BadgeComponent from '../../components/generic/badge';
import { onRemoveFromArray } from '../../actions';

const Badge = props => <BadgeComponent {...props} />;

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  onRemoveFromArray: (page, array, id) => dispatch(onRemoveFromArray(page, array, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Badge);
