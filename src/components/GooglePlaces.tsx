import { useState, useEffect, memo, Dispatch, FC } from 'react';

const options = {
  fields: ['formatted_address', 'geometry', 'name'],
  strictBounds: false,
  types: ['establishment'],
};

interface GooglePlacesProps {
  setCenter: Dispatch<google.maps.LatLngLiteral>;
  setNotFound: Dispatch<boolean>;
}

const GooglePlaces: FC<GooglePlacesProps> = ({ setCenter, setNotFound }: GooglePlacesProps) => {
  const input = document.getElementById('place-search-field') as HTMLInputElement;
  const [location, setLocation] = useState<google.maps.places.Autocomplete>(
    new google.maps.places.Autocomplete(input, options),
  );

  useEffect(() => {
    if (!location) {
      setLocation(new google.maps.places.Autocomplete(input, options));
    }
  }, [location, input]);

  useEffect(() => {
    if (location) {
      location.addListener('place_changed', () => {
        const place = location.getPlace();
        if (!place.geometry || !place.geometry.location) {
          setNotFound(true);
          return;
        }

        setCenter({
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        });
      });
    }
  }, [location, setCenter, setNotFound]);

  return null;
};

export default memo(GooglePlaces);
