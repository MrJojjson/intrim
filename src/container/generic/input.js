import React from 'react';
import { connect } from 'react-redux';

import InputComponent from '../../components/generic/input';

import { onChangeInput } from '../../actions';

const Input = props => <InputComponent {...props} />;

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  changeInputText: (page, id, value) => dispatch(onChangeInput(page, id, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Input);
