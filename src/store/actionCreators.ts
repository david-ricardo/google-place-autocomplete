import * as actionTypes from './actionTypes';

export function addPlace(place: Place) {
  const action: PlaceAction = {
    type: actionTypes.ADD_PLACE,
    place,
  };

  return googlePlaceDispatcher(action);
}

export function removePlace(place: Place) {
  const action: PlaceAction = {
    type: actionTypes.REMOVE_PLACE,
    place,
  };
  return googlePlaceDispatcher(action);
}

export function addKeyword(keyword: string) {
  const action: KeywordAction = {
    type: actionTypes.ADD_KEYWORD,
    keyword,
  };

  return keywordDispatcher(action);
}

export function removeKeyword(keyword: string) {
  const action: KeywordAction = {
    type: actionTypes.REMOVE_KEYWORD,
    keyword,
  };
  return keywordDispatcher(action);
}

export function setSelectedKeyword(keyword: string) {
  const action: KeywordAction = {
    type: actionTypes.SET_SELECTED_KEYWORD,
    keyword,
  };

  return keywordDispatcher(action);
}

function googlePlaceDispatcher(action: PlaceAction) {
  return (dispatch: DispatchType, getState: () => RootState) => {
    const placeList = getState().place.list;
    const placeNameList = placeList.map((place) => place.name);
    if (!placeNameList.includes(action.place.name)) {
      dispatch(action);
    }
  };
}

function keywordDispatcher(action: KeywordAction) {
  return (dispatch: DispatchType, getState: () => RootState) => {
    const keywordList = getState().keyword.list;
    if (action.type === actionTypes.SET_SELECTED_KEYWORD || !keywordList.includes(action.keyword)) {
      dispatch(action);
    }
  };
}
