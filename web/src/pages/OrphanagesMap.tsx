import React from "react";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { Map, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";

import local from "../images/Local.svg";

import "../styles/pages/orphanages-map.css";

const leafletUrl = "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png";

function OrphanagesMap() {
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
        <TileLayer url={leafletUrl}/>
      </Map>

      <Link to="" className="create-orphanages">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;
