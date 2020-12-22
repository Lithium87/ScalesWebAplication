import React, { Component } from "react";
import { DatePicker, Space, Checkbox } from "antd";

import { connect } from "react-redux";
import { getMeasurementsPerScale } from "../../actions/measurementsActions";
import { getAllOperators } from "../../actions/operatorsActions";

class SearchBy extends Component {
  state = {
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

  changeMaterialValue = () => {};

  changeOperatorValue = () => {};

  handleChangeMaterials = () => {};

  handleChangeOperators = () => {};

  render() {
    const { measurementsPerScale } = this.props.measurementsPerScale;
    const { operators } = this.props.operators;
    console.log(measurementsPerScale);
    console.log(operators);

    return (
      <form className="form-container" onSubmit={this.filterResults}>
        <h2>??????? ??:</h2>

        <div>
          <Space direction="horizontal">
            <DatePicker
              placeholder="?? ????"
              className="date_picker"
              id="from_date"
            />
            <DatePicker
              placeholder="?? ????"
              className="date_picker"
              id="to_date"
            />
          </Space>
        </div>

        <div>
          <Space direction="horizontal">
            <label>
              ????????:
              <select
                id="select_material"
                value=""
                onChange={this.changeMaterialValue}
                style={{ width: "200px" }}
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
              ?? ?????? ?????????
            </Checkbox>

            <label>
              ????????:
              <select
                id="select_operator"
                value=""
                onChange={this.changeOperatorValue}
                style={{ width: "200px" }}
                disabled={this.state.checkedOperator ? "disabled" : ""}
              >
                {operators
                  ? operators.map((o) => (
                      <option key={o.operator_id} value={o.operator_name}>
                        {o.operator_name}
                      </option>
                    ))
                  : null}
              </select>
            </label>

            <Checkbox id="operator_check" onChange={this.handleChangeOperators}>
              ?? ?????? ?????????
            </Checkbox>
          </Space>
        </div>

        <button
          type="submit"
          className="filter_btn"
          onClick={this.filterResults}
        >
          ?????????
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
