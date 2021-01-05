import React, { Component } from "react";
import { Table, DatePicker, Space, Checkbox, Button } from "antd";

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
    dataIndex: "Пенетрация",
    key: "Пенетрация",
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

    console.log(fromDate, toDate, selectMaterial, selectOperator);
  };

  refetchData = (event) => {
    event.preventDefault();
    console.log("Fetch fresh data");
  };

  render() {
    const { measurementsPerScale } = this.props.measurementsPerScale;
    const { operators } = this.props.operators;

    return (
      <React.Fragment>
        <form className="form_container" onSubmit={this.filterResults}>
          <h2>Търсене по:</h2>

          <div>
            <Space direction="horizontal">
              <DatePicker
                placeholder="От дата"
                className="date_picker"
                id="from_date"
              />
              <DatePicker
                placeholder="До дата"
                className="date_picker"
                id="to_date"
              />
            </Space>
          </div>

          <div>
            <Space direction="horizontal">
              <label>
                Материал:
                <select
                  id="select_material"
                  value={this.state.materialValue}
                  onChange={this.changeMaterialValue}
                  style={{ width: "200px", margin: "5px" }}
                  disabled={this.state.checkedMaterial ? "disabled" : ""}
                >
                  <option></option>
                  {measurementsPerScale
                    ? measurementsPerScale.map((mps) => (
                        <option key={mps.grid_id} value={mps.grid_name}>
                          {mps.grid_name}
                        </option>
                      ))
                    : null}
                </select>
              </label>

              <Checkbox
                id="material_check"
                onChange={this.handleChangeMaterials}
              >
                За всички материали
              </Checkbox>
            </Space>
          </div>

          <div>
            <Space direction="horizontal">
              <label>
                Оператор:
                <select
                  id="select_operator"
                  value={this.state.operatorValue}
                  onChange={this.changeOperatorValue}
                  style={{ width: "200px", margin: "15px" }}
                  disabled={this.state.checkedOperator ? "disabled" : ""}
                >
                  <option></option>
                  {operators
                    ? operators.map((o) => (
                        <option key={o.id} value={o.name}>
                          {o.name}
                        </option>
                      ))
                    : null}
                </select>
              </label>

              <Checkbox
                id="operator_check"
                onChange={this.handleChangeOperators}
              >
                За всички оператори
              </Checkbox>
            </Space>
          </div>

          <button
            type="submit"
            className="filter_btn"
            onClick={this.filterResults}
          >
            Филтрирай
          </button>
        </form>

        <div className="table_wrapper">
          <Table columns={columns} dataSource={measurementsPerScale} />
        </div>

        <Button className="btn-area" onClick={this.refetchData}>
          Нови данни
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
