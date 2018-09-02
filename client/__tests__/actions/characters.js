import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  fetchCharacters,
  FETCH_CHARACTERS_RESPONSE,
  FETCH_CHARACTERS_REQUEST
} from 'actions/characters';
import { doSomething } from 'lib/utils';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const mockResponse = [
  {
    url: 'https://anapioficeandfire.com/api/characters/1',
    name: '',
    gender: 'Female',
    culture: 'Braavosi',
    born: '',
    died: '',
    titles: [''],
    aliases: ['The Daughter of the Dusk'],
    father: '',
    mother: '',
    spouse: '',
    allegiances: [],
    books: ['https://anapioficeandfire.com/api/books/5'],
    povBooks: [],
    tvSeries: [''],
    playedBy: ['']
  }
];

describe('Actions: characters', () => {
  let store;

  beforeEach(() => {
    fetch.resetMocks();
    store = mockStore();
  });

  describe('fetchCharacters', () => {
    test('dispatches correct actions', async () => {
      fetch.once(JSON.stringify(mockResponse));

      const utils = require('lib/utils');
      utils.doSomething = jest.fn();

      await store.dispatch(fetchCharacters());

      const actions = store.getActions();
      expect(actions[0]).toEqual({ type: FETCH_CHARACTERS_REQUEST });
      expect(actions[1]).toEqual({
        type: FETCH_CHARACTERS_RESPONSE,
        characters: mockResponse
      });
    });

    test('calls my side effect', async () => {
      fetch.once(JSON.stringify(mockResponse));
      const utils = require('lib/utils');
      utils.doSomething = jest.fn();

      await store.dispatch(fetchCharacters());
      expect(utils.doSomething).toBeCalledWith({ status: 'Gucci' });
    });

    test('calls correct endpoint', async () => {
      fetch.once(JSON.stringify(mockResponse));
      await store.dispatch(fetchCharacters());
      expect(fetch.mock.calls[0][0]).toBe(
        'https://anapioficeandfire.com/api/characters/'
      );
    });
  });
});
