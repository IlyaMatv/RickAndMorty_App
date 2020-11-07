import * as axios from "axios";

export const api = {
  getCharacters() {
    return axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => {
        return res.data.results;
      });
  },
  getNextPage(page) {
    return axios
      .get(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((res) => {
        return res.data.results;
      });
  },
};
