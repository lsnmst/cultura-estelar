import React, { PureComponent } from "react";
import PropTypes from 'prop-types';

class StoryMedia extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      explicitVideoHeight: null
    }
  }

  static propTypes = {
    file: PropTypes.object
  };

  renderAudio() {
    const { file } = this.props;
    return (
      <audio id={`audio-player${file.blob.id}`} controls>
        <source src={file.url} type={file.blob.content_type} />
      </audio>
    );
  }

  renderImage() {
    const { file } = this.props;
    const { explicitVideoHeight } = this.state;
    return (
      <img
        id={`img${file.blob.id}`}
        className="img-player"
        width="80%"
        ref="img"
        src={file.url}
      >
      </img>
    )
  }


  generatePoster = (videoUrl) => {
    const hiddenVideo = document.createElement('video');
    hiddenVideo.src = videoUrl;
    hiddenVideo.crossOrigin = "anonymous";
    hiddenVideo.muted = true;
    hiddenVideo.playsInline = true;
    hiddenVideo.style.display = 'none';

    hiddenVideo.addEventListener('loadeddata', () => {
      hiddenVideo.currentTime = 5;
    });

    hiddenVideo.addEventListener('seeked', () => {
      const canvas = document.createElement('canvas');
      canvas.width = hiddenVideo.videoWidth;
      canvas.height = hiddenVideo.videoHeight;

      const ctx = canvas.getContext('2d');
      ctx.drawImage(hiddenVideo, 0, 0, canvas.width, canvas.height);

      try {
        const dataUrl = canvas.toDataURL('image/jpeg');
        this.setState({ poster: dataUrl });
      } catch (error) {
        console.error('Error generating poster:', error);
      }
    });

    document.body.appendChild(hiddenVideo);
  };

  renderVideo() {
    const { file } = this.props;
    const { explicitVideoHeight } = this.state;

    return (
      <video
        id={`video-player-${file.blob.id}`}
        className="video-player"
        height={explicitVideoHeight}
        playsInline
        controls
        disablePictureInPicture
        controlsList="nodownload"
        crossOrigin="anonymous"
        poster={this.state.poster}
      >
        <source src={file.url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  }

  render() {
    if (this.props.file.blob.content_type.indexOf("video") !== -1) {
      return this.renderVideo();
    }
    else if (this.props.file.blob.content_type.indexOf("audio") !== -1) {
      return this.renderAudio();
    }
    else {
      return this.renderImage();
    }
  }

  componentDidMount() {
    const video = this.refs.video;

    const { file } = this.props;
    if (file.blob.content_type.includes("video")) {
      this.generatePoster(file.url);
    }

    if (!!video === true) {
      video.addEventListener('loadeddata', (event) => {
        const aspectRatio = video.videoWidth / video.videoHeight;
        const newExplicitVideoHeight = video.offsetWidth / aspectRatio;
        this.setState({ explicitVideoHeight: newExplicitVideoHeight });
      });
      video.addEventListener('play', (event) => {
        window.pauseAllVideos(event.target);
      }, true);
    }
  }
}

export default StoryMedia;
