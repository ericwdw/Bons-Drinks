import React from 'react'
import Header from '../Header'
import Rodape from '../Rodape'
import fotoMinha from "../../assets/fotoEu.jpg"
import fotoMinha2 from "../../assets/foto2.jpg"
import fotoMinha3 from "../../assets/foto3.jpg"
import "./style.css"

export default function NossoTime() {
    return (
        <div className="divmae">
            <Header/>
            <section className="meuTime">
                <h1 className="MeuNome">
                    Eric Abrunhosa
                </h1>
                <img className="minhaFoto" src={fotoMinha} width="300px" height="260px" alt="Uma foto minha"/>
                <p className="textoEquipe">Criador do Bons Drinks, entusiasta da caipirinha</p>

            </section>
            <section className="meuTime">
                <h1 className="MeuNome">
                    Carla Bravo
                </h1>
                <img className="minhaFoto" src={fotoMinha2} width="300px" height="260px" alt="Uma foto minha"/>
                <p className="textoEquipe"> Designer do site Bons Drinks, apaixonada por martinis</p>
            </section>
            <section className="meuTime">
                <h1 className="MeuNome">
                    Jorge Gomes
                </h1>
                <img className="minhaFoto" src={fotoMinha3} width="300px" height="260px" alt="Uma foto minha"/>
                <p className="textoEquipe"> Designer do site Bons Drinks, degustador de mojitos</p>
            </section>
            
            <Rodape/>
        </div>
    )
}
