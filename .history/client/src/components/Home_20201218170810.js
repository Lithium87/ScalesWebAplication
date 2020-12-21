import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { getAllScales } from "../actions/scalesActions";

import SingleScale from "./SingleScale";

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(getAllScales());
  }

  render() {
    const { error, loading, scales } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="container">
        {scales.map((scale) => (
          <Link to={`/api/scale/${scale.id}`} key={scale.id}>
            <SingleScale />
          </Link>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  scales: state.scales.scales,
  loading: state.scales.loading,
  error: state.scales.error,
});

export default connect(mapStateToProps)(Home);
