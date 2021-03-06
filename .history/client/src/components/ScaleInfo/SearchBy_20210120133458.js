import React, { Component } from "react";
import { Table, Button } from "antd";
import SearchForm from "./SearchForm";
import ExportMeasurementPerScaleToExcel from "./ExportMeasurementPerScaleToExcel";

import { connect } from "react-redux";
import { getMeasurementsPerScale } from "../../actions/measurementsActions";
import { getAllOperators } from "../../actions/operatorsActions";

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

class SearchBy extends Component {
  state = {
    materialValue: "",
    operatorValue: "",
    checkedMaterial: false,
    checkedOperator: false,
  };

  componentDidMount() {
    this.props.getMeasurementsPerScale();
    this.props.getAllOperators();
  }

  changeMaterialValue = (event) => {
    this.setState({ materialValue: event.target.value });
  };

  changeOperatorValue = (event) => {
    this.setState({ operatorValue: event.target.value });
  };

  handleChangeMaterials = (event) => {
    this.setState({
      checkedMaterial: event.target.checked,
      materialValue: "",
    });
  };

  handleChangeOperators = (event) => {
    this.setState({
      checkedOperator: event.target.checked,
      operatorValue: "",
    });
  };

  filterResults = (event) => {
    event.preventDefault();

    const fromDate = document.getElementById("from_date").value;
    const toDate = document.getElementById("to_date").value;
    const selectMaterial = document.getElementById("select_material").value;
    const selectOperator = document.getElementById("select_operator").value;

    this.setState({
      materialValue: selectMaterial,
      operatorValue: selectOperator,
    });

    console.log(
      fromDate,
      toDate,
      this.state.materialValue,
      this.state.operatorValue
    );
  };

  refetchData = (event) => {
    event.preventDefault();

    this.props.getMeasurementsPerScale();
    <Table columns={columns} dataSource={this.props.measurementsPerScale} />;
  };

  downloadPDF = (event) => {
    event.preventDefault();
    //implement download to PDF
  };

  render() {
    const { measurementsPerScale } = this.props.measurementsPerScale;
    const { operators } = this.props.operators;

    return (
      <React.Fragment>
        <SearchForm
          filterResults={this.filterResults}
          changeMaterialValue={this.changeMaterialValue}
          handleChangeMaterials={this.handleChangeMaterials}
          changeOperatorValue={this.changeOperatorValue}
          handleChangeOperators={this.handleChangeOperators}
          materialValue={this.materialValue}
          operatorValue={this.operatorValue}
          checkedMaterial={this.checkedMaterial}
          checkedOperator={this.checkedOperator}
          measurementsPerScale={measurementsPerScale}
          operators={operators}
        />

        <div className="table_wrapper">
          <Table columns={columns} dataSource={measurementsPerScale} />
        </div>

        <button className="btn-area" onClick={this.refetchData}>
          Нови данни
        </button>
        <ExportMeasurementPerScaleToExcel />
        <Button className="btn-area" onClick={this.downloadPDF}>
          Сваляне на PDF файл
        </Button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  measurementsPerScale: state.measurementsPerScale,
  operators: state.operators,
});

export default connect(mapStateToProps, {
  getMeasurementsPerScale,
  getAllOperators,
})(SearchBy);
