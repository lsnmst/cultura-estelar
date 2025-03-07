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
    handleFilter: () => { }
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
          <div className="opentab">Conheça as histórias</div>
          <div className="arrow" />
          <div className="card--infologo" style={{ backgroundColor: "rgb(40,11,108)"}}>
            <img src={this.props.logoinfo_path} alt="Stellarstories" />
          </div>
        </div>
        <div className="closeMe" onClick={this.handleTray} />
        <div className="card">
          <div className="bar">
            <div className="card--logo">
              <img src={this.props.logo_path} alt="Stellarstories" />
            </div>

            <StoryList
              activeStory={this.props.activeStory}
              stories={this.props.stories}
              handleStoriesChanged={this.props.handleStoriesChanged}
              onStoryClick={this.props.onStoryClick}
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
