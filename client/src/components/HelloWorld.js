import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sum } from '../lib/math';
import { fetchCharacters } from '../actions/characters';

export class HelloWorld extends Component {
  componentDidMount() {
    this.props.fetchCharacters();
  }
  render() {
    return (
      <div>
        <h1>Hello Webpack {sum(4, 4)}</h1>
        <h1>Hello React {sum(12, 4)}</h1>
        <a href="https://webpack.js.org/">Webpack</a>
        <h2>Loading: {this.props.loading.toString()}</h2>
        <ul>
          {this.props.characters.map(character => (
            <li key={character.url}>{character.aliases[0]}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(
  ({ characters: { loading, characters } }) => ({ loading, characters }),
  { fetchCharacters }
)(HelloWorld);
