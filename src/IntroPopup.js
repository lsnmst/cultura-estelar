import React, { PureComponent } from "react";

class IntroPopup extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      isPopped: true,
    }
  }

  handleIntroPopup = () => {
    this.setState(prevState => ({
      isPopped: !prevState.isPopped
    }));
  }

  render() {
    return (
      <div className={this.state.isPopped ? 'intro-card isShown' : 'intro-card isHidden'}>
        <h2>Introdução</h2>
        <h3>O que é Stellarstories?</h3>
        <p>Stellarstories é uma extensão do <a href="https://terrastories.app/" target="_blank" rel="noreferrer"> Terrastories</a>, um aplicativo de georreportagem de código aberto para mapear histórias orais baseadas em lugares. Aqui, apresentaremos o conhecimento científico e a sabedoria sobre a cultura estelar Tupi-Guarani (com curadoria de Gustavo Villa e Marina Gomide - Parque Arqueológico da Pedra do Sol / Observatório Astronômico Seichú, Santana do Riacho, MG, Brasil), para mostrar como Stellastories pode ser usado para contar histórias sobre o cosmos. <a href="https://github.com/terrastories/stellarstories" target="_blank" rel="noreferrer"> Saiba mais sobre o Stellarstories aqui.</a></p>
        <div className="intro-card--actions">
          <span className="count" onClick={this.handleIntroPopup}>Fechar</span>
        </div>
      </div>
    );
  }

}

export default IntroPopup;
