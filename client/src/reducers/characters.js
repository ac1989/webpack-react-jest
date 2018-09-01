import {
  FETCH_CHARACTERS_RESPONSE,
  FETCH_CHARACTERS_REQUEST
} from '../actions/characters';

const initialState = {
  loading: false,
  characters: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS_REQUEST:
      return { ...state, loading: true };
    case FETCH_CHARACTERS_RESPONSE:
      return { characters: action.characters, loading: false };
    default:
      return state;
  }
};
