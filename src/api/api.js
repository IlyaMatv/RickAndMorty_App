import * as axios from "axios";

export const api = {
  getCharacters() {
    return axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => {
        return res.data.results;
      });
  },
  getNextPage(page, pageUrl) {
    // debugger
    return axios
      .get(`https://rickandmortyapi.com/api/character?page=${page}${pageUrl}`)
      .then((res) => {
        // console.log(page, `res page: ${res.data.info.pages}`);
        return res;
      });
  },
  getByName(name) {
    return axios
      .get(`https://rickandmortyapi.com/api/character/?name=${name}`)
      .then((res) => {
        return res.data.results;
      });
  },
};
