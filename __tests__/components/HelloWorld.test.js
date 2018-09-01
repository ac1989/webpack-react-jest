import React from 'react';
import HelloWorld from '../../client/src/components/HelloWorld';
import { cleanup, render } from 'react-testing-library';

describe('HelloWorld Component', () => {
  afterEach(cleanup);
  test('contains a Hello Webpack', () => {
    let wrapper = render(<HelloWorld />);
    let { getByText } = wrapper;
    expect(getByText('Hello Webpack', { exact: false })).toBeTruthy();
  });
  test('contains a Hello React 16', () => {
    let wrapper = render(<HelloWorld />);
    let { getByText } = wrapper;
    expect(getByText('Hello React 16')).toBeTruthy();
  });
});
