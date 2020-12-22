import React, { Component } from "react";
import { DatePicker, Space, Checkbox } from "antd";

import { connect } from "react-redux";
import { getMeasurementsPerScale } from "../../actions/measurementsActions";

class SearchBy extends Component {
  componentDidMount() {
    this.props.getMeasurementsPerScale();
  }

  filterResults = () => {};

  changeMaterialValue = () => {};

  changeOperatorValue = () => {};

  render() {
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
                {/* populate materials */}
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
                {/* populate operators */}
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
});

export default connect(mapStateToProps, { getMeasurementsPerScale })(SearchBy);
