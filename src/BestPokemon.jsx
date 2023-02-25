import React from "react";

const BestPokemon = () => {
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];

  return (
    <div>
      <p>My favorite Pokemon is Squirtle</p>
      <ul>
        {abilities.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default BestPokemon;
