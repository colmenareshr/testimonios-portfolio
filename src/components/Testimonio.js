import React from "react";
import '../hojas-de-estilo/Testimonio.css'

export function Testimonio(props) {
  return(
    <div className="contenedor-testimonio">
      <img className="imagen-testimonio" src={require(`../imagenes/testimonio-${props.imagen}.jpg`)} alt={`foto de ${props.alt}`} />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio"> <strong>{props.nombre}</strong> en {props.pais}</p>
        <p className="cargo-testimonio"> {props.cargo} de <strong>{props.empresa}</strong></p>
        <p className="texto-testimonio"> "{props.testimonio}"</p>
      </div>
    </div>
  );
}
export default Testimonio; 
