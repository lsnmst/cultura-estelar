import React, { PureComponent } from "react";
import Modaltupi from "./Modal";

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
      <>
        <div className={this.state.isPopped ? 'info-card isShown' : 'info-card isHidden'}>
          <h3>Cultura estelar Tupi-Guarani</h3>
          <p>Temos que garantir a acessibilidade mas prender o leitor desde o primeiro momento, acho que podemos fornecer um resumo claro e informativo sobre o tema.</p>
          <Modaltupi />
          <div className="info-card--actions">
            <span className="count" onClick={this.handleInfoPopup}>Fechar</span>
          </div>
        </div>

      </>
    );
  }

}

export default InfoPopup;
