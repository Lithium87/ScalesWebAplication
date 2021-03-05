import React, { Component } from "react";

import { Table, Radio } from "antd";
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

class ArchiveTable extends Component {
  state = {
    value: "Плочи",
  };

  componentDidMount() {
    this.props.getAllMeasurements();
    this.props.getMeasurementsByGridName();
  }

  onRadioChange = (e) => {
    console.log("radio checked", e.target.value);
    this.setState({ value: e.target.value });
  };

  loadArchive = () => {};

  downloadPDF = () => {};

  render() {
    const { measurements } = this.props.measurements;

    return (
      <>
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

            <button className="btn-area btn-block">Сваляне на PDF файл</button>
          </div>
        </div>
      </>
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
})(ArchiveTable);
