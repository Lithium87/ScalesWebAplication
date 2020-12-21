import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { getAllScales } from "../actions/scaleAction";

import SingleScale from "./SingleScale";

class Home extends Component {
  componentDidMount({ dispatch }) {
    dispatch(getAllScales());
  }

  render() {
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

// const mapDispatchToProps = (dispatch) => ({
//     fetchAllScales: dispatch(getAllScales())
// })

export default connect(mapStateToProps)(Home);
