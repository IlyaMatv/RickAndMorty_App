import { api } from "../api/api";

const initialState = {
  characters: [],
  nextPageUrl: "",
  isSearchActive: false,
  isDisabledBtn: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CHARACTERS":
      return { ...state, characters: action.characters };
    case "SWITCH_SEARCH":
      return { ...state, isSearchActive: !state.isSearchActive };
    case "SWITCH_PAGE_URL":
      return { ...state, nextPageUrl: action.pageUrl };
    case "DISABLE_BUTTON":
      return { ...state, isDisabledBtn: !state.isDisabledBtn };
    default:
      return state;
  }
};

//action

export const setCharacters = (characters) => ({
  type: "ADD_CHARACTERS",
  characters,
});

export const setIsSearchActive = () => ({
  type: "SWITCH_SEARCH",
});

export const setNextPageUrl = (pageUrl) => ({
  type: "SWITCH_PAGE_URL",
  pageUrl,
});

export const setDisableBth = () => ({
  type: "DISABLE_BUTTON"
})

//thunk

export const getCharactersTC = () => (dispatch) => {
  api.getCharacters().then((res) => {
    dispatch(setCharacters(res));
  });
};

export const getNextCharactersTC = (page, pageUrl = "") => (dispatch) => {
  api.getNextPage(page, pageUrl).then((res) => {
    // debugger
    if (page >= res.data.info.pages) {
      dispatch(setDisableBth())
      dispatch(setCharacters(res.data.results));
      // debugger
    } else {
      // debugger
      dispatch(setCharacters(res.data.results));
    }
  });
};

export const getCharactersByNameTC = (name, pageUrl) => (dispatch) => {
  api.getByName(name).then((res) => {
    dispatch(setCharacters(res));
    dispatch(setNextPageUrl(pageUrl));
  });
};
