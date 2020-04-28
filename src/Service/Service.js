import Axios from "axios";

export const getTypes = () => {
  return Axios.get(
    "https://vortigo.blob.core.windows.net/files/pokemon/data/types.json"
  )
    .then((res) => res.json())
    .catch((err) => {
      throw err;
    });
};

export const getPokemon = () => {
  return Axios.get(
    "https://vortigo.blob.core.windows.net/files/pokemon/data/pokemons.json"
  )
    .then((res) => res.json())
    .catch((err) => {
      throw err;
    });
};
