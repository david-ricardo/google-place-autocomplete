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

export function googlePlaceRequest(action: PlaceAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action);
    }, 500);
  };
}
