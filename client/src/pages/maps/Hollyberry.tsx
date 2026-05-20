import type { LatLngBoundsExpression } from "leaflet";

import L from "leaflet";
import { useRef, useEffect } from "react";
import { MapContainer, ImageOverlay } from "react-leaflet";
import Popup from "../../components/Popup";

export default function HollyberryMap() {
  const imageBounds: LatLngBoundsExpression = [
    [0, 0],
    [616, 1024],
  ];

  const popup = useRef(HTMLDialogElement);

  useEffect(() => {
    popup.current.showModal();
  }, []);

  return (
    <div className="flex flex-col">
      <Popup parentRef={popup} />
      <MapContainer
        crs={L.CRS.Simple}
        maxBounds={imageBounds}
        center={[616 / 2, 1024 / 2]}
        zoom={0.5}
        maxZoom={1}
        minZoom={1}
        className="min-h-dvh"
        zoomControl={false}
        attributionControl={false}
      >
        <ImageOverlay
          bounds={imageBounds}
          url="/src/assets/backgrounds/hollyberry.jpg"
        />
      </MapContainer>
    </div>
  );
}
