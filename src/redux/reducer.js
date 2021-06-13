import { api } from "../api/api";

const initialState = {
  characters: [],
  nextPageUrl: "",
  isSearchActive: false,
  numberOfPages: null,
  isError: false,
  locations: [],
  residents: [],
  episodes: [],
  episodeСharacters: [],
  isLoading: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CHARACTERS":
      return { ...state, characters: action.characters, isError: false };
    case "THROW_ERROR":
      return { ...state, isError: true };
    case "SET_IS_LOADING":
      return { ...state, isLoading: action.loading };
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
    case "REFRESH_CHARACTERS":
      return { ...state, residents: [], episodeСharacters: [] };
    case "ADD_EPISODES":
      return { ...state, episodes: action.ep };
    case "ADD_CHARACTERS_IN_EPISODE":
      return {
        ...state,
        episodeСharacters: [...state.episodeСharacters, action.character],
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

export const setCharactersInLocation = (character) => ({
  type: "ADD_CHARACTERS_IN_LOCATION",
  character,
});

export const setEpisodeСharacters = (character) => ({
  type: "ADD_CHARACTERS_IN_EPISODE",
  character,
});

export const refreshCharacters = () => ({
  type: "REFRESH_CHARACTERS",
});

export const setIsLoading = (loading) => ({
  type: "SET_IS_LOADING",
  loading,
});

//thunk

//characters

export const getCharactersTC = () => (dispatch) => {
  // dispatch(setIsLoading(true));
    api.getCharacters().then((res) => {
      dispatch(setRefresh());
      dispatch(setCharactersSuccess(res.data.results));
      dispatch(setNumberOfPages(res.data.info.pages));
      // dispatch(setIsLoading(false));
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
  dispatch(refreshCharacters());
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
    // res.data.results.forEach(el => {
    // const episode = {...el, charactersInEpisode: []}
    dispatch(setEpisodesSuccess(res.data.results));
    // })
    dispatch(setNumberOfPages(res.data.info.pages));
    // res.data.results.forEach((el) => {
    //   //episode
    //   el.characters.forEach((i) => {
    //     api.getByUrl(i).then((res) => {
    //       //character
    //       dispatch(setCharactersInEpisodesSuccess(el.id, res.data));
    //     });
    //   });
    // });
  });
};

export const getNextEpisodesTC = (page) => (dispatch) => {
  api.getNextPageEpisodes(page).then((res) => {
    dispatch(setRefresh());
    // res.data.results.forEach(el => {
    // const episode = {...el, charactersInEpisode: []}
    dispatch(setEpisodesSuccess(res.data.results));
    // })
    // res.data.results.forEach((el) => {
    //   //episode
    //   el.characters.forEach((i) => {
    //     api.getByUrl(i).then((res) => {
    //       // character
    //       dispatch(setCharactersInEpisodesSuccess(el.id, res.data));
    //     });
    //   });
    // });
    dispatch(setNumberOfPages(res.data.info.pages));
  });
};

export const getCharactersInEpisodeTC = (url) => (dispatch) => {
  dispatch(refreshCharacters())
  api.getByUrl(url).then((res) => {
    dispatch(setEpisodeСharacters(res.data))
    // console.log(res.data);
  });

};

// setEpisodeСharacters
