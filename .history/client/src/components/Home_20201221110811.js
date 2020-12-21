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

    return <div className="container"></div>;
  }
}

const mapStateToProps = (state) => ({
  scales: state.scales,
});

const mapDispatchToProps = (dispatch) => ({
  getAllScales: () => dispatch(getAllScales()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
