import React, { Component } from "react";

class Footer extends Component {
  state = {
    date: "",
  };

  componentDidMount() {
    this.getDate();
  }

  getDate = () => {
    let date = new Date().toDateString();
    this.setState({ date });
  };

  render() {
    const { date } = this.state;

    return (
      <div>
        <footer className="footer">
          <div className="legend">
            <div className="box white">???? ?????? ? ???????</div>
            <div className="box yellow">??????? ? ????????</div>
          </div>
          <div className="date_time">{date}</div>
        </footer>
      </div>
    );
  }
}

export default Footer;
