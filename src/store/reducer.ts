import * as actionTypes from './actionTypes';

const initialState: PlaceState = {
  places: [],
};

const reducer = (state: PlaceState = initialState, action: PlaceAction): PlaceState => {
  switch (action.type) {
    case actionTypes.ADD_PLACE:
      const newPlace: Place = {
        id: state.places.length + 1,
        name: action.place.name,
        formatted_address: action.place.formatted_address,
        coordinate: action.place.coordinate,
      };
      return {
        ...state,
        places: state.places.concat(newPlace),
      };
    case actionTypes.REMOVE_PLACE:
      const updatedPlaces: Place[] = state.places.filter((place) => place.id !== action.place.id);
      return {
        ...state,
        places: updatedPlaces,
      };
  }
  return state;
};

export default reducer;
