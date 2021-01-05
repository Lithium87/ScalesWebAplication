import React, { Component } from "react";

import { Table, Radio, Button } from "antd";

import { connect } from "react-redux";
import { getAllMeasurements } from "../../actions/measurementsActions";

const columns = [
  {
    title: "?????",
    dataIndex: "scale_id",
    key: "scale_id",
  },
  {
    title: "??????? ?",
    dataIndex: "grid_id",
    key: "grid_id",
  },
  {
    title: "??????? ???",
    dataIndex: "grid_name",
    key: "grid_name",
  },
  {
    title: "????????",
    dataIndex: "operator_name",
    key: "operator_name",
  },
  {
    title: "?????",
    dataIndex: "measurement_time",
    key: "measurement_time",
  },
  {
    title: "????",
    dataIndex: "measurement_date",
    key: "measurement_date",
  },
  {
    title: "????? [g]",
    dataIndex: "weight",
    key: "weight",
  },
];

class Archive extends Component {
  state = {
    value: 1,
  };

  componentDidMount() {
    this.props.getAllMeasurements();
  }

  onRadioChange = (e) => {
    console.log("radio checked", e.target.value);
    this.setState({ value: e.target.value });
  };

  loadArchive = () => {};

  exportToExcel = () => {};

  downloadPDF = () => {};

  render() {
    const { measurements } = this.props;

    return (
      <div className="input_container">
        <h1>??????????? ?? ?????</h1>
        <div className="radio_btn">
          <Radio.Group
            className="centered"
            onChange={this.onRadioChange}
            value={this.state.value}
          >
            <Radio value={1}>?????</Radio>
            <Radio value={2}>???????</Radio>
            <Radio value={3}>?????? ?????</Radio>
          </Radio.Group>
        </div>
        <div className="main">
          <div className="table_area">
            <Table columns={columns} dataSource={measurements} />
          </div>
          <div className="btn_wrapper">
            <Button className="btn-area btn-block" onClick={this.loadArchive}>
              ?????? ?????
            </Button>
            <Button
              className="btn-area btn-block"
              onClick={this.exportToExcel}
              disabled={measurements ? "" : "disabled"}
            >
              ??????? ??? Excel
            </Button>
            <Button
              className="btn-area btn-block"
              onClick={this.downloadPDF}
              disabled={measurements ? "" : "disabled"}
            >
              ??????? ?? PDF ????
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  measurements: state.measurements,
});

export default connect(mapStateToProps, { getAllMeasurements })(Archive);
