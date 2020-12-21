import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import SingleScale from "./SingleScale";

class Home extends Component {
  state = {
    connected: false,
    isLoaded: false,
    scales: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/scales")
      .then((res) => res.data)
      .then((result) => {
        this.setState({
          isLoaded: true,
          scales: result.data,
        });
      });
  }

  render() {
    return (
      <div className="container">
        {this.state.scales.map((scale) => (
          <Link to={`/api/scale/${scale.id}`} key={scale.id}>
            <SingleScale />
          </Link>
        ))}
      </div>
    );
  }
}

export default Home;
