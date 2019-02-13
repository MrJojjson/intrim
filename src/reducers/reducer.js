import { omit } from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case 'ON_CHANGE_INPUT':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.id]: action.value,
        },
      };
    case 'ADD_VALIDATION_ERROR':
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.id]: action.value,
        },
      };
    case 'REMOVE_VALIDATION_ERROR':
      return {
        ...state,
        errors: omit(state.errors, action.id),
      };
    case 'REGISTRATION_STEP':
      return {
        ...state,
        registrationStep: state.registrationStep ? state.registrationStep + action.step : 0 + action.step,
      };
    default:
      return state;
  }
};
