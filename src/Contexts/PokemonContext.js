import React, { createContext, useState, useEffect, useContext } from "react";
import { getPokemon } from "../Service/Service";

import { TypeContext } from "./TypeContext";

export const PokemonContext = createContext({});

export const PokemonProvider = (props) => {
  const [pokemonsByType, setPokemonsByType] = useState({});
  const { types } = useContext(TypeContext);

  useEffect(() => {
    getPokemon().then((pokemons) => {
      if (types.length > 0 && pokemons.length > 0) {
        let pokemonMap = types.reduce((list, current) => {
          list[current.name] = {};
          return list;
        }, {});

        pokemons.forEach((pokemon) => {
          if (pokemon.type) {
          }
          pokemon.type.forEach((type) => {
            pokemonMap[type][pokemon.name] = pokemon;
          });
        });
        setPokemonsByType(pokemonMap);
      }
    });
  }, [types]);

  return (
    <PokemonContext.Provider value={{ pokemonsByType }}>
      {props.children}
    </PokemonContext.Provider>
  );
};
