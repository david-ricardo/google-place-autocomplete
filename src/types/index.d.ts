export interface Place {
  coordinate: google.maps.LatLngLiteral;
  formatted_address: string | undefined;
  name: string | undefined;
}
