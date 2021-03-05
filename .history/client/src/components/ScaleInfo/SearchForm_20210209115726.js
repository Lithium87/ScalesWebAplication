import React from "react";
import { DatePicker, Space, Checkbox } from "antd";

const SearchForm = (props) => {
  return (
    <div>
      <form className="form_container" onSubmit={props.handleFilters}>
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
                value={props.materialValue}
                onChange={props.changeMaterialValue}
                style={{ width: "200px", margin: "5px" }}
                disabled={props.checkedMaterial ? "disabled" : ""}
              >
                <option></option>
                {props.measurementsPerScale
                  ? props.measurementsPerScale.map((mps) => (
                      <option key={mps.grid_id} value={mps.grid_name}>
                        {mps.grid_name}
                      </option>
                    ))
                  : null}
              </select>
            </label>

            <Checkbox
              id="material_check"
              onChange={props.handleChangeMaterials}
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
                value={props.operatorValue}
                onChange={props.changeOperatorValue}
                style={{ width: "200px", margin: "15px" }}
                disabled={props.checkedOperator ? "disabled" : ""}
              >
                <option></option>
                {props.operators
                  ? props.operators.map((o) => (
                      <option key={o.id} value={o.name}>
                        {o.name}
                      </option>
                    ))
                  : null}
              </select>
            </label>

            <Checkbox
              id="operator_check"
              onChange={props.handleChangeOperators}
            >
              За всички оператори
            </Checkbox>
          </Space>
        </div>

        <button
          type="submit"
          className="filter_btn"
          onClick={props.handleFilters}
        >
          Филтрирай
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
