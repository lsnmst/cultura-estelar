import React, { Component } from "react";
import PropTypes from "prop-types";
import Story from "./Story";
import Filter from "./Filter";
import ReactList from 'react-list';

class StoryList extends Component {
  static propTypes = {
    stories: PropTypes.array.isRequired,
    activeStory: PropTypes.object,
    handleFilter: PropTypes.func,
    clearFilteredStories: PropTypes.func,
    onStoryClick: PropTypes.func.isRequired,
    onStoryHover: PropTypes.func.isRequired,
    filterMap: PropTypes.object,
    categories: PropTypes.array,
    filterCategory: PropTypes.string,
    filterItem: PropTypes.string,
    handleFilterCategoryChange: PropTypes.func,
    handleFilterItemChange: PropTypes.func,
    itemOptions: PropTypes.array
  };

  handleFilterItemChange = (item) => {
    this.props.handleFilterItemChange(item);
    if (this._list) this._list.scrollTo(0);
  }

  handleClearFilteredStories = () => {
    this.props.clearFilteredStories();
    if (this._list) this._list.scrollTo(0);
  }

  renderStory = (index, key) => {
    const story = this.props.stories[index];
    if (!story) return null;

    const storyClass = this.props.activeStory && this.props.activeStory.id === story.id
      ? `story${index} isActive`
      : `story${index}`;

    return (
      <Story
        story={story}
        onStoryClick={this.props.onStoryClick}
        onStoryHover={this.props.onStoryHover}
        storyClass={storyClass}
        key={key}
      />
    );
  };

  render() {
    const { stories } = this.props;

    return (
      <React.Fragment>
        <div className="card--nav">
          <Filter
            categories={this.props.categories}
            filterMap={this.props.filterMap}
            clearFilteredStories={this.handleClearFilteredStories}
            filterCategory={this.props.filterCategory}
            filterItem={this.props.filterItem}
            handleFilterCategoryChange={this.props.handleFilterCategoryChange}
            handleFilterItemChange={this.handleFilterItemChange}
            itemOptions={this.props.itemOptions}
          />
        </div>
        <div className="stories">
          <ReactList
            ref={list => this._list = list}
            itemRenderer={this.renderStory}
            length={stories.length}
            type='variable'
          />
        </div>
      </React.Fragment>
    );
  }
}

export default StoryList;
