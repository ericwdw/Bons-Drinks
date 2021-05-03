import { React, useState } from "react";
import Header from "../Header/Header";
import Rodape from "../Rodape/Rodape";
import "./style.css";
import { requisicaoBuscar } from "../Api/request";
import logo from "../../assets/logo.png"

export default function Teste() {
  const [nomeBebida, setNomeBebida] = useState("");
  const [nomeEncontrado, setNomeEncontrado] = useState("");
  const [imagem, setImagem] = useState(
    logo
  );
  const [descricao, setDescricao] = useState("");

  const req = requisicaoBuscar(nomeBebida);

  return (
    <div className="divmae">
      <Header />
      <div className="alinhamentoApi"></div>
      <ul className="flex-api">
        <section className="cabecalho">
          <h1 className="tituloDrink">Encontre o seu próximo Bom-Drink</h1>
        </section>
        <section className="corpo-buscarBebida">
          <div className="buscar-bebida">
            <input
              className="inputBuscar"
              type="text"
              placeholder="O que vamos beber?"
              onBlur={(e) => {
                setNomeBebida(e.target.value);
                const drinkBebida = e.target.value;
              }}
            ></input>
            <button
              onClick={async () => {
                const requisicao = await requisicaoBuscar(nomeBebida);
                setNomeEncontrado(requisicao[0].strDrink);
                setImagem(requisicao[0].strDrinkThumb);
                setDescricao(requisicao[0].strInstructions);
                console.log(requisicao);
              }}
              className="botaoBuscar"
            > Procurar </button>
          </div>
          <div className="infoDrink">
            <h1 className="tituloDrinks">{nomeEncontrado}</h1>
            <img
              src={imagem}
              className="estiloImg"
              alt="bebida"
              width="150px"
            />
            <p>{descricao}</p>
          </div>
        </section>
      </ul>
      <Rodape />
    </div>
  );
}
