import React from "react";
import PropTypes from "prop-types";
import StoryMedia from "./StoryMedia";

const Story = props => {
  const { story, storyClass, onStoryClick, onStoryHover } = props;

  const handleMouseEnter = () => {
    if (onStoryHover && story.points && story.points.length > 0) {
      const point = story.points[0];
      const framedView = { center: [point.geometry.coordinates[0], point.geometry.coordinates[1], 0] };
      onStoryHover(framedView);
    }
  }

  const renderSpeakers = speakers => {
    return (
      <div key={`${story.id}-speakers`}>
        {/*         {
          speakers.map(speaker => {
            return (
              <img
                src={speaker.picture_url}
                alt={speaker.name}
                title={speaker.name}
                key={speaker.id}
              />
            );
          })
        }
 */}        <p style={{ fontWeight: 'bold' }}>
          {
            speakers.map(speaker => {
              return speaker.name
            }).join(', ')
          }
        </p>
      </div>
    );
  }

  return (
    <React.Fragment>
      <li
        className={storyClass}
        onClick={() => onStoryClick(story)}
        onKeyDown={() => onStoryClick(story)}
        onMouseEnter={() => props.onStoryHover && props.onStoryHover(story)}
        key={story.id}
        role="presentation"
        style={{ cursor: "pointer" }}
      >
        {/*         
        <div className="speakers">
          {renderSpeakers(story.speakers)}
        </div>
        */}

        <div className="container">
          <h6 className="title">
            {story.title}
            {story.permission_level === "restricted" && " 🔒"}
          </h6>

          {/* <hr style={{ borderColor: "rgb(252, 206,85)", backgroundColor: "rgb(252, 206,85)", width: "70%" }} /> */}


          <div className="storymedia">
            {story.media && story.media.map(file => (
              <StoryMedia file={file} key={file.id} />
            ))}
          </div>

          <p className="author"><b>Artistas:</b> {story.author}</p>

          <p className="cultural_context"><i>Contexto cultural e histórico:<br /></i> {story.context}</p>
          <p className="description" dangerouslySetInnerHTML={{ __html: story.desc }}></p>

          {/* {story.language && <p><b>Idioma:</b> {story.language}</p>} */}
          {/* <p className="cultural_context"><i>Origem da história <br /></i> {story.origin}</p> */}

          <div className="tipbox">
            <p><i>Sugestões de uso educativo <br /></i> {story.edu}</p>
            <div style={{ display: "flex", flexWrap: "nowrap" }}>
              <p className="insta"></p>
              <p className="author" style={{ marginLeft: "5px" }}>
                <a href="https://www.instagram.com/observatorioseichu/" target="_blank" rel="noopener noreferrer">
                  Observatório Astronômico Seichú
                </a>
              </p>
            </div>
          </div>

        </div>
      </li>
    </React.Fragment>
  );
}

Story.propTypes = {
  story: PropTypes.object,
  onStoryClick: PropTypes.func,
  storyClass: PropTypes.string,
  onStoryHover: PropTypes.func,
};

Story.defaultProps = {
  story: {},
  onStoryClick: () => { },
  storyClass: "",
  onStoryHover: () => { },
};

export default Story;
