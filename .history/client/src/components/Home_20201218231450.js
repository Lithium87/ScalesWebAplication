import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { getAllScales } from "../actions/scalesActions";

import SingleScale from "./SingleScale";

class Home extends Component {
  componentDidMount() {
    this.props.getAllScales();
  }

  render() {
    const { scales } = this.props.scales;
    console.log(scales);

    return (
      <div className="container">
        {this.scales.map((scale) => (
          <Link to={`/api/scale/${scale.id}`} key={scale.id}>
            <SingleScale />
          </Link>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  scales: state.scales,
});

export default connect(mapStateToProps, { getAllScales })(Home);
