import React, { Component } from "react";

import { Table, Radio } from "antd";

import { connect } from "react-redux";
import { getMeasurementsByGridName } from "../../actions/measurementsActions";

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

class ArchiveTable extends Component {
  state = {
    value: "?????",
  };

  render() {
    return <div className="radio_btn"></div>;
  }
}

const mapStateToProps = (state) => ({
  measurementsByGridName: state.measurementsByGridName,
});

export default connect(mapStateToProps, { getMeasurementsByGridName })(
  ArchiveTable
);
