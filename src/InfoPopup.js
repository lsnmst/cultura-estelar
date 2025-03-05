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
          <div className="info-card--actions" style={{position:"fixed", marginTop:"0px", marginRight:"0px"}} >
            <span className="count" onClick={this.handleInfoPopup}><b>X</b></span>
          </div>
          <h2>Cultura estelar Tupi-Guarani</h2>
          <p>Temos que garantir a acessibilidade mas prender o leitor desde o primeiro momento, acho que podemos fornecer um resumo claro e informativo sobre o tema.</p>
          <p>Temos que garantir a acessibilidade mas prender o leitor desde o primeiro momento, acho que podemos fornecer um resumo claro e informativo sobre o tema.</p>
          <Modaltupi />
        </div>

      </>
    );
  }

}

export default InfoPopup;
