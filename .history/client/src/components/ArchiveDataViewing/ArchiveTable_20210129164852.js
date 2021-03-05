import React, { Component } from "react";

import { Table, Radio } from "antd";

import { connect } from "react-redux";
import { getMeasurementsByGridName } from "../../actions/measurementsActions";

const columns = [
  {
    title: "Везна",
    dataIndex: "scale_id",
    key: "scale_id",
  },
  {
    title: "Изделие №",
    dataIndex: "grid_id",
    key: "grid_id",
  },
  {
    title: "Изделие име",
    dataIndex: "grid_name",
    key: "grid_name",
  },
  {
    title: "Оператор",
    dataIndex: "operator_name",
    key: "operator_name",
  },
  {
    title: "Време",
    dataIndex: "measurement_time",
    key: "measurement_time",
  },
  {
    title: "Дата",
    dataIndex: "measurement_date",
    key: "measurement_date",
  },
  {
    title: "Тегло [g]",
    dataIndex: "weight",
    key: "weight",
  },
];

class ArchiveTable extends Component {
  state = {
    value: "Плочи",
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
