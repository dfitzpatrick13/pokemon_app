import React from 'react';

const style = {
  color: '#ffffff',
  backgroundColor: '#000000',
};

class Index extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div style={style}>
        <h1>See All The Pokemon!</h1>
        <ul>
          {pokemon.map((poke, index) => (
            <li key={index}>
              <a href={`/pokemon/${index}`}>{poke.name}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Index;
