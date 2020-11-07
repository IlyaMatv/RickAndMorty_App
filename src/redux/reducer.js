import { api } from "../api/api";

const initialState = {
  characters: [],
  nextPage: 1
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CHARACTERS":
      return { ...state, characters: action.characters };
    default:
      return state;
  }
};



//action

export const setCharacters = (characters) => ({
  type: "ADD_CHARACTERS",
  characters
});

//thunk

export const getCharactersTC = () => (dispatch) => {
  
  api.getCharacters().then((res) => {
    dispatch(setCharacters(res.results));
  });
};

export const getNextCharactersTC = (page) => (dispatch) => {
  
  api.getNextPage(page).then((res) => {
    dispatch(setCharacters(res.results));
  });
};

