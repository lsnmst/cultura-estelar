import React from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


class Modaltupi extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div>
        <div className='modalbutton'><button onClick={this.handleOpenModal}>CONHEÇA MAIS</button></div>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
        >
          <div className='modalpad'>
            <div className='modaltitle'>Cultura estelar Tupi-Guarani</div>

            <div className="modaldescription">
              TEXTO DE INTRODUÇÃO (Resumo)<br /><br />
              Exemplo: (só um exemplo) bem marketeiro
              “A cultura estelar dos povos Tupi-Guarani revela uma visão nativa do cosmos, em que constelações e corpos celestes são conectados às cosmogonias, ao ciclo da natureza e aos rituais de sua vida comunitária. Neste espaço, você será guiado por narrativas ancestrais que revelam a rica tradição nativo-brasileira de observação do céu, preservada por gerações. Explore como o céu noturno reflete a terra e o espírito dos povos originários, em uma complexa trama de  que compoe cosmologia, ciência e cultura. ”
              <br /><br /></div>

            <div className="modaldescription">
              IMAGEM DA COSMOLOGIA<br /><br />
              Sugestão: Colocar algumas imagens da maybi
              Complemento: Adicionar uma legenda explicativa e a possibilidade de clicar para expandir e explorar com mais detalhes cada constelação ou história associada.
              Exemplo: "Clique na imagem para explorar a cosmologia indígena e as constelações Tupi-Guarani que iluminam o céu e contam histórias ancestrais.”
              <br /><br /></div>

            <div className="modaldescription">
              REFERÊNCIA AO PARQUE ARQUEOLÓGICO/OBSERVATÓRIO SEICHÚ<br /><br />
              Sugestão: Incluir uma breve menção ao Parque Arqueológico da Pedra do Sol e/ou observatório Seichuu parceiros que colaboram na preservação e promoção do conhecimento estelar indígena. Esse espaço pode oferecer um link direto para o website do parque ou observatório, onde o usuário pode aprender mais sobre o local físico e suas atividades.
              Exemplo:
              “O Parque Arqueológico da Pedra do Sol e Observatório Seichuu tem sido um importante centro para a preservação da cultura estelar Tupi-Guarani, conectando o público a histórias e saberes ancestrais que estão diretamente ligados ao céu noturno, situado na Serra do Cipó, Minas Gerais. Saiba mais sobre nossas iniciativas educacionais e culturais no link abaixo.”
              <br /><br /></div>

            <div className="modaldescription">
              REFERÊNCIA A LIVROS/ESTUDOS<br /><br />
              Sugestão: Mencionar brevemente publicações ou estudos de referência que abordam a cosmologia Tupi-Guarani, com a possibilidade de links para obter mais informações ou fazer download.
              Exemplo:
              “Para aprofundar seu conhecimento sobre a cosmologia Tupi-Guarani, explore nossos recursos e recomendações de leitura, incluindo estudos realizados em parceria com pesquisadores indígenas e acadêmicos dedicados à preservação desse conhecimento.” (Aqui podemos disponibilizar vários pdf's e teses relacionados ao tema, para pessoa ir se aprofundando cada vez mais)
              <br /><br /></div>

            <div className="modaldescription">
              REFERÊNCIA ÀS COMUNIDADES INDÍGENAS (Ainda em levantamento, temos alguns contatos)<br /><br />
              Sugestão: Incluir uma homenagem ou reconhecimento às comunidades indígenas que são as guardiãs do conhecimento estelar. Isso não só traz autenticidade ao projeto, como também valoriza a contribuição contínua dessas comunidades.
              Exemplo:
              “Este projeto foi realizado em estreita colaboração com as comunidades indígenas xxxxx, situadas em xxxx lugares, cujos anciãos, sábios e narradores mantêm viva a rica tradição de observação do cosmos. Agradecemos a generosidade dessas comunidades por compartilharem suas histórias e seu saber com o mundo.”
              <br /><br /></div>

            <div className="modaldescription">
              BOTÕES PARA EXPLORAÇÃO<br /><br />
              Sugestão: Adicionar botões interativos que levam a páginas específicas.
              Eles podem ser:
              “Explorar as Constelações”
              “Conhecer as Comunidades”
              “Visitar o Parque/Observatório Seichú"
              “Leituras Recomendadas”
              <br /><br /></div>



              <div className='modalbutton'><button onClick={this.handleCloseModal}>Fechar</button></div>
          </div>
        </ReactModal>
      </div>
    );
  }
}

const props = {};

export default Modaltupi