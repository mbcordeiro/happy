import local from "../images/Local.svg";
import Leaflet from "leaflet";

const mapIcon = Leaflet.icon({
  iconUrl: local,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60],
});

export default mapIcon;
