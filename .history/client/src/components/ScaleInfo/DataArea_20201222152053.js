import React, { Component } from "react";
import { Table, Button } from "antd";

import { connect } from "react-redux";
import { getMeasurementsPerScale } from "../../actions/measurementsActions";

const columns = [
  {
    title: "Измерване №",
    dataIndex: "measurement_id",
    key: "measurement_id",
  },
  {
    title: "Решетка №",
    dataIndex: "grid_id",
    key: "grid_id",
  },
  {
    title: "Решетка име",
    dataIndex: "grid_name",
    key: "grid_name",
  },
  {
    title: "Име на оператор",
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
  {
    title: "Плътност [g/cm3]",
    dataIndex: "density",
    key: "density",
  },
  {
    title: "Смесител №",
    dataIndex: "mixer",
    key: "mixer",
  },
  {
    title: "Бъркало",
    dataIndex: "byrkalo",
    key: "byrkalo",
  },
  {
    title: "Пенетрация",
    dataIndex: "penetration",
    key: "penetration",
  },
];

class DataArea extends Component {
  componentDidMount() {
    this.props.getMeasurementsPerScale();
  }

  refetchData = () => {};

  render() {
    const { measurementsPerScale } = this.props.measurementsPerScale;

    return (
      <div>
        <div className="table_wrapper">
          <Table columns={columns} dataSource={measurementsPerScale} />
        </div>
        <Button className="btn-area" onClick={this.refetchData}>
          Нови данни
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  measurementsPerScale: state.measurementsPerScale,
});

export default connect(mapStateToProps, { getMeasurementsPerScale })(DataArea);
