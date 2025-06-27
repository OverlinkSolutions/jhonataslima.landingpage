import React from "react";
import style from "./style.module.sass";

// Defina as propriedades do componente

const StoreLocation = () => {
  const mapSrc = `https://www.google.com/maps?q=-10.6861429,-37.4258917&hl=es;z=15&output=embed`;

  return (
    <div className={style.storeLocation} id="contato">
      <div className={style.storeLocationText}>
        <h1>Venha nos visitar!</h1>
      </div>
      <div className={style.storeLocationMap}>
        <iframe
          width="100%"
          height="100%"
          frameBorder="1"
          style={{ border: 10, borderRadius: "5px" }}
          src={mapSrc}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default StoreLocation;
