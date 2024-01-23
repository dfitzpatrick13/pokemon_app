import React from 'react';

class Show extends React.Component {
  render() {
    const { pokemon } = this.props;
    const pokemonId = this.props.match.params.id;
    const selectedPokemon = pokemon[pokemonId];

    if (!selectedPokemon) {
      return <div>Pokemon not found!</div>;
    }

    const { name, img } = selectedPokemon;

    return (
      <div>
        <h1>Gotta Catch 'Em All</h1>
        <h2>{name}</h2>
        <img src={`${img}.jpg`} alt={name} />
        <a href="/pokemon">Back</a>
      </div>
    );
  }
}

export default Show;
