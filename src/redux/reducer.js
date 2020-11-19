import { api } from "../api/api";

const initialState = {
  characters: [],
  nextPageUrl: "",
  isSearchActive: false,
  numberOfPages: null,
  isError: false,
  locations: [],
  charactersInLocation: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CHARACTERS":
      return { ...state, characters: action.characters, isError: false };
    case "THROW_ERROR":
      return { ...state, isError: true };
    case "SWITCH_SEARCH":
      return { ...state, isSearchActive: !state.isSearchActive };
    case "SWITCH_PAGE_URL":
      return { ...state, nextPageUrl: action.pageUrl };
    case "ADD_PAGE_NUMBER":
      return { ...state, numberOfPages: action.pageNum };
    case "REFRESH_CHARACTERS":
      return { ...state, characters: [], nextPageUrl: "", numberOfPages: null, locations: [] };
    case "ADD_LOCATIONS":
      return { ...state, locations: action.loc };
    case "ADD_CHARACTERS_IN_LOCATION":
      return { ...state, 
        charactersInLocation:  [...state.charactersInLocation, action.character] }
    case "REFRESH_CHARACTERS_IN_LOCATION":
      return { ...state, 
        charactersInLocation:  [] }
    default:
      return state;
  }
};

//action

export const setCharactersSuccess = (characters) => ({
  type: "ADD_CHARACTERS",
  characters
});

export const setCharactersError = () => ({
  type: "THROW_ERROR",
});

export const setIsSearchActive = () => ({
  type: "SWITCH_SEARCH",
});

export const setCharactersRefresh = () => ({
  type: "REFRESH_CHARACTERS",
});

export const setNextPageUrl = (pageUrl) => ({
  type: "SWITCH_PAGE_URL",
  pageUrl
});

export const setNumberOfPages = (pageNum) => ({
  type: "ADD_PAGE_NUMBER",
  pageNum
});

export const setLocationsSuccess = (loc) => ({
  type: "ADD_LOCATIONS",
  loc
});

export const setCharactersInLocation = (character) => ({
  type: "ADD_CHARACTERS_IN_LOCATION",
  character
});

export const refreshCharactersInLocation = () => ({
  type: "REFRESH_CHARACTERS_IN_LOCATION"
})

//thunk

export const getCharactersTC = () => (dispatch) => {
  api.getCharacters().then((res) => {
    dispatch(setCharactersRefresh());
    dispatch(setCharactersSuccess(res.data.results));
    dispatch(setNumberOfPages(res.data.info.pages));
  });
};

export const getNextCharactersTC = (page, pageUrl = "") => (dispatch) => {
  api.getNextPageCharacter(page, pageUrl).then((res) => {
    dispatch(setCharactersSuccess(res.data.results));
    dispatch(setNumberOfPages(res.data.info.pages));
  });
};

export const getCharactersByNameTC = (name, pageUrl) => (dispatch) => {
  api.getByName(name).then(
    (res) => {
      dispatch(setCharactersSuccess(res.data.results));
      dispatch(setNextPageUrl(pageUrl));
      dispatch(setNumberOfPages(res.data.info.pages));
    },
    (error) => error && dispatch(setCharactersError())
  );
};

// export const getCharactersByIdTC = (id) => (dispatch) => {
//   api.getById(id).then((res) => {
//     debugger
//   });
// };

export const getCharactersByURLTC = (url) => (dispatch) => {
  api.getByUrl(url).then((res) => {
    dispatch(setCharactersInLocation(res.data))
  });
};


export const getLocationsTC = () => (dispatch) => {
  api.getLocations().then((res) => {
    dispatch(setCharactersRefresh());
    dispatch(setLocationsSuccess(res.data.results));
    dispatch(setNumberOfPages(res.data.info.pages));
  });
};

export const getNextLocationsTC = (page) => (dispatch) => {
  api.getNextPageLocation(page).then((res) => {
    dispatch(setLocationsSuccess(res.data.results))
    dispatch(setNumberOfPages(res.data.info.pages))
  });
};