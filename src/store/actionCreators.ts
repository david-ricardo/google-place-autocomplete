import * as actionTypes from './actionTypes';

export function addPlace(place: Place) {
  const action: PlaceAction = {
    type: actionTypes.ADD_PLACE,
    place,
  };

  return googlePlaceRequest(action);
}

export function removePlace(place: Place) {
  const action: PlaceAction = {
    type: actionTypes.REMOVE_PLACE,
    place,
  };
  return googlePlaceRequest(action);
}

export function addKeyword(keyword: string) {
  const action: KeywordAction = {
    type: actionTypes.ADD_KEYWORD,
    keyword,
  };

  return keywordRequest(action);
}

export function removeKeyword(keyword: string) {
  const action: KeywordAction = {
    type: actionTypes.REMOVE_KEYWORD,
    keyword,
  };
  return keywordRequest(action);
}

function googlePlaceRequest(action: PlaceAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action);
    }, 500);
  };
}

export function keywordRequest(action: KeywordAction) {
  return (dispatch: DispatchType) => {
    dispatch(action);
  };
}
