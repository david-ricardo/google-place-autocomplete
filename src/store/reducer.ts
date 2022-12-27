import { combineReducers } from 'redux';
import * as actionTypes from './actionTypes';

const initialPlaceState: PlaceState = {
  list: [],
};

const initialKeywordState: KeywordState = {
  list: [],
  selected: '',
};

const placeReducer = (state: PlaceState = initialPlaceState, action: PlaceAction): PlaceState => {
  switch (action.type) {
    case actionTypes.ADD_PLACE:
      const newPlace: Place = {
        id: state.list.length + 1,
        name: action.place.name,
        formatted_address: action.place.formatted_address,
        coordinate: action.place.coordinate,
      };
      return {
        ...state,
        list: state.list.concat(newPlace),
      };
    case actionTypes.REMOVE_PLACE:
      const updatedPlaces: Place[] = state.list.filter((place) => place.id !== action.place.id);
      return {
        ...state,
        list: updatedPlaces,
      };
  }
  return state;
};

const keywordReducer = (
  state: KeywordState = initialKeywordState,
  action: KeywordAction,
): KeywordState => {
  switch (action.type) {
    case actionTypes.ADD_KEYWORD:
      const newKeyword: string = action.keyword;
      return {
        ...state,
        list: state.list.concat(newKeyword).filter(String),
      };
    case actionTypes.REMOVE_KEYWORD:
      const updatedKeywords: string[] = state.list.filter((keyword) => keyword !== action.keyword);
      return {
        ...state,
        list: updatedKeywords,
      };
    case actionTypes.SET_SELECTED_KEYWORD:
      return {
        ...state,
        selected: action.keyword,
      };
  }
  return state;
};

const rootReducer = combineReducers({
  place: placeReducer,
  keyword: keywordReducer,
});

export default rootReducer;
