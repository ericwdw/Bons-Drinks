import React from "react";
import Header from "../Header";
import Rodape from "../Rodape";
import drink from "../../assets/martini.jpg";
import "./estilo.css"

export default function SobreNos() {
  return (
    <div className="divmae">
      <Header />
      <div className="divSobre">
        <h1 className="tituloSobre">Sobre Nós</h1>
        <div className="conteudoSobre">
          <img className="fotoDrink" src={drink} alt="" width="300px" />
          <p className="textoSobre">
          Fundada em abril de 2021, a Bons Drinks nasceu para ser a sua melhor amiga, 
          nunca o deixamos na mão trazendo ideias de drinks incríveis.
          </p>
        </div>
      </div>
      <Rodape />
    </div>
  );
}
