import React, { Component, useState } from "react";
import imagemContato from "../../assets/contato.jpg";
import Botao from "../Botao/Botao";
import Header from "../Header";
import Rodape from "../Rodape";
import "./style.css";

export default function Formulario({titulo}) {
  const [texto, setTexto] = useState("Enviar");

 
  function handleClick() {
    
    setTexto("Obrigado :)");
    setTimeout(() => {
      setTexto("Enviar");
    }, 3000);
  }
  return (
    <div className="divmae">
      <Header />
      <h1 className="titulocontato">{titulo}</h1>
      <div className="div2">
          <img className="imag1" src={imagemContato} width="433px" />
      </div>
      <section className="principal">
          <div className="divForms">
            <form className="formulario">
              <div className="inputDisplay">
                <label for="nome">Nome:</label>
                <input type="text" name="fname" required></input>
                <label for="email">Email:</label>
                <input type="text" name="lname" required></input>
                <label for="mensagem">Mensagem:</label>
                <textarea className="inputText"></textarea>
              </div> 
              <Botao
                type="submit"
                texto={texto}
                aoClicar={handleClick}
                className="botaoForms"
              />
            </form>
          </div>
      </section>
      <Rodape />
    </div>
  );
}
