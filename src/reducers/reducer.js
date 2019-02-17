import { omit } from 'lodash';

const initState = {
  registrationStep: 'REGINIT',
};

export default (state = initState || {}, action) => {
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
        registrationStep: action.step,
      };
    default:
      return state;
  }
};
