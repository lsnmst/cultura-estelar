import React, { Component } from "react";
import PropTypes from 'prop-types';
import StoryList from "./StoryList";

class Card extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true
    };
  }

  static propTypes = {
    filterMap: PropTypes.object,
    categories: PropTypes.array,
    clearFilteredStories: PropTypes.func,
    handleFilter: PropTypes.func,
    user: PropTypes.object,
    stories: PropTypes.array,
    handleStoriesChanged: PropTypes.func,
    onStoryClick: PropTypes.func,
    onStoryHover: PropTypes.func,
    logo_path: PropTypes.string,
    logoinfo_path: PropTypes.string,
    activeStory: PropTypes.object,
    filterCategory: PropTypes.string,
    filterItem: PropTypes.string,
    handleFilterCategoryChange: PropTypes.func,
    handleFilterItemChange: PropTypes.func,
    itemOptions: PropTypes.array
  };

  static defaultProps = {
    filterMap: {},
    categories: [],
    clearFilteredStories: () => { },
    handleFilter: () => { },
    onStoryHover: () => { },
  }

  handleTray = () => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }


  render() {
    return (
      <div className={this.state.isToggleOn ? 'cardContainer onCanvas' : 'cardContainer offCanvas'}>
        <div className="tab" onClick={this.handleTray}>
          <div className="opentab">
            {this.state.isToggleOn
              ? "Ver mapa"
              : "Explorar histórias"}
          </div>
          <div className="arrow" />
          <div className="card--infologo" style={{ backgroundColor: "rgb(40,11,108)" }}>
            <img src={this.props.logoinfo_path} alt="Stellarstories" />
          </div>
        </div>
        {this.state.isToggleOn && (
          <div className="closeMe" onClick={this.handleTray} />
        )}
        <div className="card">
          <div className="bar">
            <div className="card--logo">
              <img src={this.props.logo_path} alt="Stellarstories" />
            </div>
            <div className="card-tupi">TUPI-GUARANI</div>
            <span className="card-tupi desc">Celebrando a ciência viva dos povos originários, transmitindo seu conhecimento sobre a observação do céu</span>



            <StoryList
              activeStory={this.props.activeStory}
              stories={this.props.stories}
              handleStoriesChanged={this.props.handleStoriesChanged}
              onStoryClick={this.props.onStoryClick}
              onStoryHover={this.props.onStoryHover}
              handleFilter={this.props.handleFilter}
              clearFilteredStories={this.props.clearFilteredStories}
              filterMap={this.props.filterMap}
              categories={this.props.categories}
              filterCategory={this.props.filterCategory}
              filterItem={this.props.filterItem}
              handleFilterCategoryChange={this.props.handleFilterCategoryChange}
              handleFilterItemChange={this.props.handleFilterItemChange}
              itemOptions={this.props.itemOptions}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
