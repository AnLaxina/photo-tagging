import type { LatLngBoundsExpression } from "leaflet";
import L from "leaflet";
import { MapContainer, ImageOverlay, Rectangle } from "react-leaflet";

export default function HollyberryMap() {
  const imageBounds: LatLngBoundsExpression = [
    [0, 0],
    [616, 1024],
  ];

  return (
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
  );
}
