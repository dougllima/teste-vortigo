import React, { createContext, useState, useEffect, useContext } from "react";
import { getPokemon } from "../Service/Service";

import { TypeContext } from "./TypeContext";

export const PokemonContext = createContext({});

export const PokemonProvider = (props) => {
  const [pokemonsByType, setPokemonsByType] = useState({});
  const [currentList, setCurrentList] = useState([]);
  const { types } = useContext(TypeContext);

  useEffect(() => {
    getPokemon().then((pokemons) => {
      if (types.length > 0 && pokemons.length > 0) {
        let pokemonMap = types.reduce((list, current) => {
          list[current.name] = [];
          return list;
        }, {});

        pokemons.forEach((pokemon) => {
          if (pokemon.type)
            pokemon.type.forEach((type) => {
              pokemonMap[type].push(pokemon);
            });
        });
        setPokemonsByType(pokemonMap);
      }
    });
  }, [types]);

  const findByName = (name) => {
    setCurrentList((state) =>
      state.filter((pokemon) => pokemon.name.contains(name))
    );
  };

  const filterByType = (types) => {
    console.log(types);
    let result = [];
    types.forEach((type) => result.concat(pokemonsByType[type]));
    setCurrentList(result);
  };

  const sort = (asc) => {
    setCurrentList((state) =>
      state.sort((a, b) => {
        if (asc) return a < b ? -1 : a > b ? 1 : 0;
        else return a < b ? 1 : a > b ? -1 : 0;
      })
    );
  };

  return (
    <PokemonContext.Provider
      value={{ currentList, filterByType, findByName, sort }}
    >
      {props.children}
    </PokemonContext.Provider>
  );
};
