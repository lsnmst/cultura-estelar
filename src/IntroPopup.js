import React, { PureComponent } from "react";

class IntroPopup extends PureComponent {

  constructor(props){
    super(props);
    this.state = { 
      isPopped: true,
    }
  }

  handleIntroPopup = () => {
    this.setState(prevState =>({
      isPopped: !prevState.isPopped
    }));
  }

  render(){
    return(
      <div className={this.state.isPopped ? 'intro-card isShown' : 'intro-card isHidden'}>
        <h2>Introdução</h2>
        <h3>O que é Stellarstories?</h3>
        <p>Stellarstories é uma proposta de extensão do Terrastories, um aplicativo de georreportagem de código aberto para mapear histórias orais baseadas em lugares. Esta é uma prova de conceito, que apresenta o conhecimento científico e a sabedoria sobre a cultura estelar Tupi-Guarani (edição de Gustavo Villa - Parque Arqueológico da Pedra do Sol, Brasil), para mostrar como ele pode ser usado para contar histórias sobre o cosmos. <a href="https://github.com/terrastories/stellarstories" target="_blank" rel="noreferrer"> Saiba mais sobre o Stellarstories aqui.</a></p>

        <div className="intro-card--actions">
          <span className="count" onClick={this.handleIntroPopup}>Fechar</span>
        </div>
      </div>
    );
  }

}

export default IntroPopup;
