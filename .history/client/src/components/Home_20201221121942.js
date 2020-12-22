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

    return (
      <div className="container">
        {scales.data.map((scale) => (
          <Link to={`/api/scale/${scale.id}`}>
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

const mapDispatchToProps = (dispatch) => ({
  getAllScales: () => dispatch(getAllScales()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
