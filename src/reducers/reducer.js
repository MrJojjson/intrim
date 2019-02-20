import { omit, set, updateWith } from 'lodash';

const initState = {
  registrationStep: 'REGINIT',
  inputs: {},
  errors: {},
};

export default (state = initState, action) => {
  switch (action.type) {
    case 'ON_CHANGE_INPUT':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.page]: {
            ...state.inputs[action.page],
            [action.id]: action.value,
          },
        },
      };
      // return set(state, `inputs[${action.page}][${action.id}]`, action.value);
    case 'ADD_VALIDATION_ERROR':
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.page]: {
            ...state.errors[action.page],
            [action.id]: action.value,
          },
        },
      };
      // return set(state, `errors[${action.page}][${action.id}]`, action.value);
    case 'REMOVE_VALIDATION_ERROR':
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.page]: omit(state.errors[action.page], action.id),
        },
      };
    case 'REGISTRATION_STEP':
      return {
        ...state,
        registrationStep: action.step,
      };
    default:
      return state;
  }
};
