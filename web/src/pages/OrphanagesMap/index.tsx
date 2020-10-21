import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiPlus, FiArrowRight } from "react-icons/fi";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import "../styles/pages/orphanages-map.css";
import local from "../../images/Local.svg";
import mapIcon from "../../utils/mapIcon";
import api from "../../services/api";

const leafletUrl = "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png";

interface Orphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

function OrphanagesMap() {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
    api.get("orphanages").then((response) => {
      setOrphanages(response.data);
    });
  }, []);

  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={local} alt="" />

          <h2>Escola um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Blumenau</strong>
          <span>Santa Catarina</span>
        </footer>
      </aside>

      <Map
        center={[-26.9103073, -49.8256363]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer url={leafletUrl} />
        {orphanages.map((orphanages) => {
          return (
            <Marker
              key={orphanages.id}
              icon={mapIcon}
              position={[orphanages.latitude, orphanages.longitude]}
            >
              <Popup closeButton={false} minWidth={240} className="map-popup">
                {orphanages.name}
                <Link to={`orphanages/${orphanages.id}`}>
                  <FiArrowRight size={20} color="#FFF" />
                </Link>
              </Popup>
            </Marker>
          );
        })}
      </Map>

      <Link to="orphanages/create" className="create-orphanages">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;
