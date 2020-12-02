import * as axios from "axios";

export const api = {
  getCharacters() {
    return axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => {
        return res;
      });
  },
  getNextPageCharacter(page, pageUrl) {
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
  getByUrl(url) {
    return axios.get(url).then((res) => {
      return res;
    });
  },
  getLocations() {
    return axios.get("https://rickandmortyapi.com/api/location").then((res) => {
      return res;
    });
  },
  getNextPageLocation(page) {
    return axios
      .get(`https://rickandmortyapi.com/api/location?page=${page}`)
      .then((res) => {
        return res;
      });
  },
  getEpisodes() {
    return axios.get("https://rickandmortyapi.com/api/episode").then((res) => {
      return res;
    });
  },
  getNextPageEpisodes(page) {
    return axios
      .get(`https://rickandmortyapi.com/api/episode?page=${page}`)
      .then((res) => {
        return res;
      });
  },
};
