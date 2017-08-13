import N from 'nier';
import types from './types';

const initialState = {
  data: null,
  loading: false,
  loaded: false,
  error: false,
};

export default function docsReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_DOCS_REQUEST: {
      return N.set('loading', true, state);
    }

    default: {
      return state;
    }
  }
}
