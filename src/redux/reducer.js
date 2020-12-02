import { api } from "../api/api";

const initialState = {
  characters: [],
  nextPageUrl: "",
  isSearchActive: false,
  numberOfPages: null,
  isError: false,
  locations: [],
  residents: [],
  episodes: []
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
    case "REFRESH":
      return {
        ...state,
        characters: [],
        nextPageUrl: "",
        numberOfPages: null,
        locations: [],
        residents: [],
        episodes: [],
      };
    case "ADD_LOCATIONS":
      return { ...state, locations: action.loc };
    case "ADD_CHARACTERS_IN_LOCATION":
      return { ...state, residents: [...state.residents, action.character] };
    case "REFRESH_CHARACTERS_IN_LOCATION":
      return { ...state, residents: [] };
    case "ADD_EPISODES":
      return { ...state, episodes: [...state.episodes, action.ep] };
    case "ADD_CHARACTERS_IN_EPISODES":
      return {
        ...state,
        episodes: 
          state.episodes.map((el) => {
            if (el.id === action.id) {
              return {
                ...el,
                charactersInEpisode: [...el.charactersInEpisode, action.character]
              };
            } else {
              return { ...el };
            }
          }),
      };
    default:
      return state;
  }
};

//action

export const setCharactersSuccess = (characters) => ({
  type: "ADD_CHARACTERS",
  characters,
});

export const setCharactersError = () => ({
  type: "THROW_ERROR",
});

export const setIsSearchActive = () => ({
  type: "SWITCH_SEARCH",
});

export const setRefresh = () => ({
  type: "REFRESH",
});

export const setNextPageUrl = (pageUrl) => ({
  type: "SWITCH_PAGE_URL",
  pageUrl,
});

export const setNumberOfPages = (pageNum) => ({
  type: "ADD_PAGE_NUMBER",
  pageNum,
});

export const setLocationsSuccess = (loc) => ({
  type: "ADD_LOCATIONS",
  loc,
});

export const setEpisodesSuccess = (ep) => ({
  type: "ADD_EPISODES",
  ep,
});

export const setCharactersInEpisodesSuccess = (id, character) => ({
  type: "ADD_CHARACTERS_IN_EPISODES",
  id,
  character
});

export const setCharactersInLocation = (character) => ({
  type: "ADD_CHARACTERS_IN_LOCATION",
  character,
});

export const refreshCharactersInLocation = () => ({
  type: "REFRESH_CHARACTERS_IN_LOCATION",
});

//thunk

//characters

export const getCharactersTC = () => (dispatch) => {
  api.getCharacters().then((res) => {
    dispatch(setRefresh());
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

export const getCharactersByURLTC = (url) => (dispatch) => {
  dispatch(refreshCharactersInLocation());
  api.getByUrl(url).then((res) => {
    dispatch(setCharactersInLocation(res.data));
  });
};

//locations

export const getLocationsTC = () => (dispatch) => {
  api.getLocations().then((res) => {
    dispatch(setRefresh());
    dispatch(setLocationsSuccess(res.data.results));
    dispatch(setNumberOfPages(res.data.info.pages));
  });
};

export const getNextLocationsTC = (page) => (dispatch) => {
  api.getNextPageLocation(page).then((res) => {
    dispatch(setLocationsSuccess(res.data.results));
    dispatch(setNumberOfPages(res.data.info.pages));
  });
};

//episodes

export const getEpisodesTC = () => (dispatch) => {
  api.getEpisodes().then((res) => {
    dispatch(setRefresh());
    res.data.results.forEach(el => {
      const episode = {...el, charactersInEpisode: []}
      dispatch(setEpisodesSuccess(episode));
    })
    dispatch(setNumberOfPages(res.data.info.pages));
    res.data.results.forEach((el) => {
      //episode
      el.characters.forEach((i) => {
        api.getByUrl(i).then((res) => {
          //character
          dispatch(setCharactersInEpisodesSuccess(el.id, res.data));
        });
      });
    });
  });
};

export const getNextEpisodesTC = (page) => (dispatch) => {
  api.getNextPageEpisodes(page).then((res) => {
    dispatch(setRefresh())
    res.data.results.forEach(el => {
      const episode = {...el, charactersInEpisode: []}
      dispatch(setEpisodesSuccess(episode));
    })
    res.data.results.forEach((el) => {
      //episode
      el.characters.forEach((i) => {
        api.getByUrl(i).then((res) => {
          //character
          dispatch(setCharactersInEpisodesSuccess(el.id, res.data));
        });
      });
    });
    dispatch(setNumberOfPages(res.data.info.pages));
  });
};
