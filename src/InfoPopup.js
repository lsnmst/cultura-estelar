import React, { PureComponent } from "react";

class InfoPopup extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      isPopped: true,
    }
  }

  handleInfoPopup = () => {
    this.setState(prevState => ({
      isPopped: !prevState.isPopped
    }));
  }

  render() {
    return (
      <div className={this.state.isPopped ? 'info-card isShown' : 'info-card isHidden'}>
        <h3>Cultura estelar Tupi-Guarani</h3>
        <p>Uma breve introdução às histórias apresentadas poderia ser colocada aqui. Referências podem ser feitas às comunidades indígenas onde essas histórias são contadas, ao livro de Gustavo para um estudo mais profundo, ao trabalho da Maybi, à propriedade intelectual com referência a <a href="https://localcontexts.org/" target="_blank" rel="noreferrer"> Local Contexts</a></p>
        <div className="info-card--actions">
          <span className="count" onClick={this.handleInfoPopup}>Fechar</span>
        </div>
      </div>
    );
  }

}

export default InfoPopup;
