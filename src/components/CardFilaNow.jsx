import React from "react";
import "../css/CardFilaNow.css";

const CardFilaNow = ({ turnoId, numero, tiempo, segundos }) => {
  const formatTiempo = () => {
    const minutos = Math.floor(segundos / 60);
    const segundosRestantes = segundos % 60;
    return `${minutos}:${
      segundosRestantes < 10 ? "0" : ""
    }${segundosRestantes}`;
  };
  return (
    <div className="card text-center">
      <div className="card-header">En atención</div>
      <div className="card-body">
        <h1 className="text-success">Turno: {numero}</h1>
        <span className="text-muted lead">Hora: {tiempo}</span>
        <div className="mt-2">
          <strong>Tiempo en atención:</strong> <span>{formatTiempo()}</span>
        </div>
      </div>
    </div>
  );
};

export default CardFilaNow;
