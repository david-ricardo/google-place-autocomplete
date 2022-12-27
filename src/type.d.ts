interface Place {
  id?: number;
  coordinate: google.maps.LatLngLiteral;
  formatted_address: string | undefined;
  name: string | undefined;
}

type PlaceState = {
  list: Place[];
};

type PlaceAction = {
  type: string;
  place: Place;
};

type KeywordState = {
  list: string[];
};

type KeywordAction = {
  type: string;
  keyword: string;
};

type RootState = {
  places: PlaceState;
  keywords: KeywordState;
};

type RootAction = PlaceAction | KeywordAction;

type DispatchType = (args: PlaceAction | KeywordAction) => PlaceAction | KeywordAction;
