import React from "react";
import style from "./style.module.sass";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaClock } from "react-icons/fa";

const StoreLocation = () => {
  const mapSrc = `https://www.google.com/maps?q=-10.6861429,-37.4258917&hl=es;z=15&output=embed`;

  return (
    <div className={style.storeLocation} id="contato">
      {/* Área do Mapa */}
      <div className={style.mapContainer}>
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0, borderRadius: "5px" }}
          src={mapSrc}
          allowFullScreen
        ></iframe>
      </div>

      {/* Linha vertical separadora */}
      <div className={style.divider}></div>

      {/* Área de informações */}
      <div className={style.infoContainer}>
        <h1>Venha nos visitar!</h1>
        <ul>
          <li>
            <FaMapMarkerAlt className={style.icon} />
            Praça Fausto Cardoso, nº 57, Apto. 01, Centro - Itabaiana-SE
          </li>
          <li>
            <FaClock className={style.icon} />
            Seg a Sex: 08h às 18h
          </li>
          <li>
            <FaEnvelope className={style.icon} />
            jhonataslima.adv@gmail.com
          </li>
          <li>
            <FaPhone className={style.icon} />
            (79) 99628-4351
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StoreLocation;
