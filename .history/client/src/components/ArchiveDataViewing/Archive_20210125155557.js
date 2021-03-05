import React, { Component } from "react";

import { Table, Radio } from "antd";
import ReactPDF, { Document, Page, View, Text } from "@react-pdf/renderer";
import ExportArchiveToExcel from "./ExportArchiveToExcel";

import { connect } from "react-redux";
import { getAllMeasurements } from "../../actions/measurementsActions";

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

  downLoadPDF = () => (
    <Document>
      <Page size="A4" wrap>
        <View>
          <Text>
            <Table columns={columns} dataSource={this.props.measurements} />
          </Text>
        </View>
      </Page>
    </Document>
  );

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
            <Radio value={1}>Плочи</Radio>
            <Radio value={2}>Решетки</Radio>
            <Radio value={3}>Оловна паста</Radio>
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
            <button className="btn-area btn-block" onClick={this.downLoadPDF}>
              Сваляне на PDF файл
            </button>
          </div>
        </div>
      </div>
    );
  }
}

ReactPDF.render(this.downLoadPDF, `${__dirname}/output.pdf`);

const mapStateToProps = (state) => ({
  measurements: state.measurements,
});

export default connect(mapStateToProps, { getAllMeasurements })(Archive);
