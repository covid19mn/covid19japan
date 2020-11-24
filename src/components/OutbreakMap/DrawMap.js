import { MAPBOX_API_KEY } from "./ApiKey";

const MAP_CONFIG = {
  container: "map-container",
  style: "mapbox://styles/mapbox/light-v10?optimize=true",
  zoom: 3,
  minZoom: 3,
  maxZoom: 7,
  center: {
    lng: 103.8467,
    lat: 46.8625,
  },
  maxBounds: [
    { lat: 41.581958, lng: 86.874897 }, // SW
    { lat: 52.148362, lng: 119.979018 }, // NE
  ],
};

// Create and initializes the map.
const drawMap = () => {
  mapboxgl.accessToken = MAPBOX_API_KEY;
  let map = new mapboxgl.Map(MAP_CONFIG);
  map.dragRotate.disable();
  map.touchZoomRotate.disableRotation();
  map.scrollZoom.disable();
  map.addControl(
    new mapboxgl.NavigationControl({
      showCompass: false,
      showZoom: true,
    })
  );
  return map;
};

export default drawMap;
