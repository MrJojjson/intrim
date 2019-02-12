import { omit } from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};
