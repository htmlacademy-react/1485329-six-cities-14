import { useEffect, useRef } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../hooks/useMap';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT, mapTypeSettings } from '../utils/constants';
import { OfferCity, OffersArrayType } from '../types/offer';

type MapProps = {
  offers: OffersArrayType;
  city: OfferCity;
  сardHoverId: number | null;
  mapType: 'mainScreen' | 'offerScreen';
};

function Map (props: MapProps): JSX.Element {
  const { offers, city, сardHoverId, mapType } = props;

  const mapRef = useRef(null);

  const map = useMap({mapRef, city});

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: (offer.id === сardHoverId && сardHoverId !== null)
              ? currentCustomIcon
              : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, city, сardHoverId]);

  return (

    <section className={`${mapTypeSettings[mapType].className}__map map`} ref={mapRef} > </section>
  );
}

export default Map;
