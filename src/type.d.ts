interface Place {
  id?: number;
  coordinate: google.maps.LatLngLiteral;
  formatted_address: string | undefined;
  name: string | undefined;
}

type PlaceState = {
  list: Place[];
  selected?: Place;
};

type PlaceAction = {
  type: string;
  place: Place;
};

type KeywordState = {
  list: string[];
  selected: string;
};

type KeywordAction = {
  type: string;
  keyword: string;
};

type RootState = {
  place: PlaceState;
  keyword: KeywordState;
};

type RootAction = PlaceAction | KeywordAction;

type DispatchType = (args: PlaceAction | KeywordAction) => PlaceAction | KeywordAction;
