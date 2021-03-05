import React, { Component } from "react";

import { Table, Radio } from "antd";
import { Document, Page, View, Text } from "@react-pdf/renderer";
import ExportArchiveToExcel from "./ExportArchiveToExcel";

import { connect } from "react-redux";
import {
  getAllMeasurements,
  getMeasurementsByGridName,
} from "../../actions/measurementsActions";

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

class Archive extends Component {
  state = {
    value: "Плочи",
  };

  componentDidMount() {
    this.props.getAllMeasurements();
  }

  onRadioChange = (e) => {
    console.log("radio checked", e.target.value);
    this.setState({ value: e.target.value });
    // load table data based on the grid_name
  };

  loadArchive = () => {};

  downloadPDF = (event) => {};

  render() {
    const { measurements } = this.props.measurements;

    return (
      <div className="input_container">
        <h1>Разглеждане на архив</h1>
        <div className="radio_btn">
          <Radio.Group
            className="centered"
            onChange={this.onRadioChange}
            value={this.state.value}
          >
            <Radio value="Плочи">Плочи</Radio>
            <Radio value="Решетки">Решетки</Radio>
            <Radio value="Оловна паста">Оловна паста</Radio>
          </Radio.Group>
        </div>
        <div className="main">
          <div className="table_area">
            <Table columns={columns} dataSource={measurements} />
          </div>
          <div className="btn_wrapper">
            <button className="btn-area btn-block" onClick={this.loadArchive}>
              Зареди архив
            </button>
            <ExportArchiveToExcel />
            <button className="btn-area btn-block" onClick={this.downloadPDF}>
              Сваляне на PDF файл
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  measurements: state.measurements,
  measurementsByGridName: state.measurementsByGridName,
});

export default connect(mapStateToProps, {
  getAllMeasurements,
  getMeasurementsByGridName,
})(Archive);
