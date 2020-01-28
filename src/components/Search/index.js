import React from "react";

export const SearchResults = ({data}) => {
  return (
    <div className="search-results">
    <h2>Resultados de búsqueda</h2>
    <hr />
    <div className="item">
      <p className="item__feature">
        <i className="icon icon-origen"></i>Origen
      </p>
      <textarea value={data.origin} readOnly rows="1" />
    </div>
    <div className="item">
      <p className="item__feature">
        <i className="icon icon-estado"></i>Estado del Envío
      </p>
      <textarea value={data.status} readOnly rows="1" />
    </div>
    <div className="item">
      <p className="item__feature">
        <i className="icon icon-tracking"></i>Nro Tracking
      </p>
      <textarea value={data.tracking} readOnly rows="1" />
    </div>
    <div className="item">
      <p className="item__feature">
        <i className="icon icon-destino"></i>Destino
      </p>
      <textarea value={data.destiny} readOnly rows="1" />
    </div>
    <div className="item">
      <p className="item__feature">
        <i className="icon icon-tipo"></i>Tipo de Envío
      </p>
      <textarea value={data.type} readOnly rows="1" />
    </div>
    <div className="item">
      <p className="item__feature">
        <i className="icon icon-aviso"></i>Nro de Aviso
      </p>
      <textarea value={data.notice} readOnly rows="1" />
    </div>
    <div className="item">
      <p className="item__feature">
        <i className="icon icon-observacion"></i>Observación
      </p>
      <textarea value={data.observacion} readOnly rows="2" />
    </div>
  </div>
  );
};
