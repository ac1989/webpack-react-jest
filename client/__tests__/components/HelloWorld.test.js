import React from 'react';
import { cleanup, render } from 'react-testing-library';
import { HelloWorld } from 'components/HelloWorld';
import { characters } from '../__mocks__/data/characters';

describe('HelloWorld Component', () => {
  afterEach(cleanup);
  test('contains a Hello Webpack', () => {
    let wrapper = render(
      <HelloWorld
        loading={true}
        characters={characters}
        fetchCharacters={jest.fn()}
      />
    );
    let { getByText } = wrapper;
    expect(getByText('Hello Webpack', { exact: false })).toBeTruthy();
  });
  test('contains a Hello React 16', () => {
    let wrapper = render(
      <HelloWorld
        loading={true}
        characters={characters}
        fetchCharacters={jest.fn()}
      />
    );
    let { getByText } = wrapper;
    expect(getByText('Hello React 16')).toBeTruthy();
  });
});
