import React from "react";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";

import local from "../images/Local.svg";

import "../styles/pages/orphanages-map.css";

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={local} alt="" />

          <h2>Escola um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :D</p>
        </header>

        <footer>
          <strong>Blumenau</strong>
          <span>Santa Catarina</span>
        </footer>
      </aside>

      <div></div>

      <Link to="" className="create-orphanages">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;
