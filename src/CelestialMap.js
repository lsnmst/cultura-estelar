import React, { Component } from "react";
import PropTypes from "prop-types";

import './d3-celestial/d3.min.js';
import './d3-celestial/d3.geo.projection.min.js';
import './d3-celestial/celestial.min.js';
import './d3-celestial/celestial.css';


export default class CelestialMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      centerLong: null,
      centerLat: null
    };
  }

  static propTypes = {
    activePoint: PropTypes.object,
    points: PropTypes.object,
    framedView: PropTypes.object,
    centerLong: PropTypes.number,
    centerLat: PropTypes.number,
  };


  componentDidMount() {
    const centerLong = parseInt(this.props.centerLong);
    const centerLat = parseInt(this.props.centerLat);

    const isMobile = window.innerWidth <= 768;

    var config = {
      projection: "airy",
      zoomlevel: 1.2,
      center: [centerLong, centerLat],
      follow: "center",
      background: { fill: "#333", stroke: "#b3b300", opacity: 1, width: 2 },
      orientationfixed: false,
      container: "celestial-map",
      datapath: "./d3-celestial/",

      constellations: {
        names: true,
        namesType: "iau",
        nameStyle: { fill: ["#fec", "#f6c", "#fec"], opacity: [0.3, 0.7, 0.3], font: ["bold 13px 'Nehanda-SpiritMedium', 'Lucida Sans Unicode', Trebuchet, Helvetica, Arial, sans-serif", "bold 20px 'Nehanda-SpiritMedium', 'Lucida Sans Unicode', Trebuchet, Helvetica, Arial, sans-serif", "12px 'Nehanda-SpiritMedium','Lucida Sans Unicode', Trebuchet, Helvetica, Arial, sans-serif"], align: "center", baseline: "middle" },
        lines: true,
        lineStyle: { stroke: ["#99c", "#f6c", "#99c"], width: [1, 1.35, 1], opacity: 0.7 },
        bounds: true,
        boundStyle: { stroke: "#ffff00", width: 0.5, opacity: 0.7, dash: [8, 4, 2, 4] }
      },
      stars: {
        limit: 12,
        propername: !isMobile,
        propernameStyle: { fill: "#9999bbbe", font: "12px 'Nehanda-SpiritMedium','Palatino Linotype', Georgia, Times, 'Times Roman', serif", align: "right", baseline: "bottom" },
        propernameLimit: 5,
        designation: true,
        designationStyle: { fill: "#9999bb", font: "10px 'Nehanda-SpiritMedium','Palatino Linotype', Georgia, Times, 'Times Roman', serif", align: "left", baseline: "top" },
        designationLimit: 2.5,
      },
      dsos: {
        show: true,
        names: true,
      },
      mw: {
        style: { fill: "#e79f32ff", opacity: 0.1 }
      },
      planets: {
        show: true,
        names: true,
        nameStyle: { fill: "#00ccff", font: "15px 'Nehanda-SpiritMedium'", align: "right", baseline: "top" },
      },
      background: {
        fill: "rgb(40,11,108)",
        opacity: 1,
        stroke: "#000000",
        width: 1.5
      }
    };

    window.Celestial.display(config);

    this.setState({
      centerLong: centerLong,
      centerLat: centerLat
    })
  }

  componentDidUpdate(prevProps) {
    if (this.props.framedView && this.props.framedView !== prevProps.framedView) {
      window.Celestial.rotate(this.props.framedView);
    }
  }

  resetMapToCenter() {
    window.Celestial.rotate({ center: [this.state.centerLong, this.state.centerLat] })
  }


  render() {
    return <div ref={el => (this.mapContainer = el)} className="celestial-MainMap" id="celestial-map"></div>
  }
}