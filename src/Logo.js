import React from "react";

const Logo = (props) => {
  const appName = "Hadi A.P's Pokedex";

  return (
    <header>
      <div className="App">
        <h1>{props.appName}</h1>
        <img
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
          alt="pokedex"
        />
      </div>
      <span>{appName}</span>
      <h2>{props.app}</h2>
    </header>
  );
};

export default Logo;
