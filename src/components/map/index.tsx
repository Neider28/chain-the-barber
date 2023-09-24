import { useEffect } from 'react';

export default function MapContact() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('leaflet').then((L) => {
        const customIcon = new L.Icon({
          iconUrl: 'https://i.postimg.cc/8Pq7Y3T3/marker.png',
          iconSize: [32, 32],
          iconAnchor: [16, 32],
          popupAnchor: [0, -32],
        });

        const map = L.map('map').setView([51.505, -0.09], 13);
        map.scrollWheelZoom.disable();

        L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
          attribution: '&copy; <a href="https://stamen.com">Stamen Design</a>',
        }).addTo(map);
        L.marker([51.505, -0.09], { icon: customIcon }).addTo(map)
          .bindPopup('A pretty CSS3 popup. <br /> Easily customizable.')
          .openPopup();
      });
    }
  }, []);

  return (
    <div id="map" style={{ height: '600px', width: '100%' }}></div>
  );
}
