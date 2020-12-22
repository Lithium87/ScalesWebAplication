import React, { Component } from "react";
import { DatePicker, Space, Checkbox } from "antd";

import { connect } from "react-redux";
import { getMeasurementsPerScale } from "../../actions/measurementsActions";
import { getAllOperators } from "../../actions/operatorsActions";

class SearchBy extends Component {
  state = {
    materialValue: "--Изберете материал--",
    operatorValue: "--Изберете оператор--",
    checkedMaterial: false,
    checkedOperator: false,
    filters: {
      fromDateFilter: "",
      toDateFilter: "",
      selectMaterialFilter: "",
      selectOperatorFilter: "",
    },
  };

  componentDidMount() {
    this.props.getMeasurementsPerScale();
    this.props.getAllOperators();
  }

  filterResults = () => {};

  changeMaterialValue = (event) => {
    this.setState({ materialValue: event.target.value });
  };

  changeOperatorValue = (event) => {
    this.setState({ operatorValue: event.target.value });
  };

  handleChangeMaterials = (event) => {
    this.setState({ checkedMaterial: event.target.checked });
  };

  handleChangeOperators = (event) => {
    this.setState({ checkedOperator: event.target.checked });
  };

  render() {
    const { measurementsPerScale } = this.props.measurementsPerScale;
    const { operators } = this.props.operators;

    return (
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
                {measurementsPerScale
                  ? measurementsPerScale.map((mps) => (
                      <option key={mps.grid_id} value={mps.grid_name}>
                        {mps.grid_name}
                      </option>
                    ))
                  : null}
              </select>
            </label>

            <Checkbox id="material_check" onChange={this.handleChangeMaterials}>
              За всички материали
            </Checkbox>

            <label>
              Оператор:
              <select
                id="select_operator"
                value={this.state.operatorValue}
                onChange={this.changeOperatorValue}
                style={{ width: "200px", margin: "15px" }}
                disabled={this.state.checkedOperator ? "disabled" : ""}
              >
                {operators
                  ? operators.map((o) => (
                      <option key={o.id} value={o.name}>
                        {o.name}
                      </option>
                    ))
                  : null}
              </select>
            </label>

            <Checkbox id="operator_check" onChange={this.handleChangeOperators}>
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
