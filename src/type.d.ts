interface Place {
  id?: number;
  coordinate: google.maps.LatLngLiteral;
  formatted_address: string | undefined;
  name: string | undefined;
}

type PlaceState = {
  places: Place[];
};

type PlaceAction = {
  type: string;
  place: Place;
};

type DispatchType = (args: PlaceAction) => PlaceAction;
