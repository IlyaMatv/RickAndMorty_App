import * as axios from "axios";

export const api = {
  getCharacters() {
    return axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => {
        return res;
      });
  },
  getNextPage(page, pageUrl) {
    return axios
      .get(`https://rickandmortyapi.com/api/character?page=${page}${pageUrl}`)
      .then((res) => {
        return res;
      });
  },
  getByName(name) {
    return axios
      .get(`https://rickandmortyapi.com/api/character/?name=${name}`)
      .then((res) => {
        return res;
      });
  },
};
