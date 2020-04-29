import Axios from "axios";

export const getTypes = () => {
  return Axios.get(
    "https://vortigo.blob.core.windows.net/files/pokemon/data/types.json"
  )
    .then(handleResult)
    .catch((err) => {
      throw err;
    });
};

export const getPokemon = () => {
  return Axios.get(
    "https://vortigo.blob.core.windows.net/files/pokemon/data/pokemons.json"
  )
    .then(handleResult)
    .catch((err) => {
      throw err;
    });
};

const handleResult = (res) => {
  if (res.status === 200) {
    return res.data.results;
  }
  //TODO Tratar erro
};
