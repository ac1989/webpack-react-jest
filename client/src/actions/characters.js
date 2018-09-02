import { doSomething } from '../lib/utils';

export const FETCH_CHARACTERS_REQUEST = 'FETCH_CHARACTERS_REQUEST';
export const FETCH_CHARACTERS_RESPONSE = 'FETCH_CHARACTERS_RESPONSE';

export const fetchCharacters = () => {
  return dispatch => {
    dispatch({ type: FETCH_CHARACTERS_REQUEST });

    return fetch('https://anapioficeandfire.com/api/characters/')
      .then(res => res.json())
      .then(data => {
        doSomething({ status: 'Gucci' });
        dispatch({ type: FETCH_CHARACTERS_RESPONSE, characters: data });
      });
  };
};
