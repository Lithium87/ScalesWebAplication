import React, { Component } from "react";
import { Table } from "antd";
import { Document, Page, View, Text } from "@react-pdf/renderer";
import SearchForm from "./SearchForm";
import ExportMeasurementPerScaleToExcel from "./ExportMeasurementPerScaleToExcel";
import ScaleMeasurementsTable from "./ScaleMeasurementsTable";

import { connect } from "react-redux";
import {
  getMeasurementsPerScale,
  getFilteredData,
} from "../../actions/measurementsActions";
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
    // handleFilters: (filters) => this.handleFilters(filters, "material"),
  },
  {
    title: "Име на оператор",
    dataIndex: "operator_name",
    key: "operator_name",
    // handleFilters: (filters) => this.handleFilters(filters, "operator"),
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
    // handleFilters: (filters) => this.handleFilters(filters, "dates"),
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
    filters: {
      fromDate: "",
      toDate: "",
      material: "",
      operator: "",
    },
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
      operatorValue: ""
    })
  }

  handleFilters = (event) => {
    event.preventDefault();
    
    let fromDate = document.getElementById('from_date').value;
    let toDate = document.getElementById('to_date').value;
    let material = document.getElementById('select_material').value;
    let operator = document.getElementById('select_operator').value;

    this.setState({
      filters: {
        fromDate,
        toDate,
        material,
        operator
      }
    })

    this.props.getFilteredData(this.state.filters); 
  }

  refetchData = (event) => {
    event.preventDefault();

    this.props.getMeasurementsPerScale();
  };

  downloadPDF = (event) => (
    <Document>
      <Page size="A4" wrap>
        <View>
          <Text>
            <Table
              columns={columns}
              dataSource={this.props.measurementsPerScale}
            />
          </Text>
        </View>
      </Page>
    </Document>
  );

  render() {
    console.log(this.state.filters);
    const { measurementsPerScale } = this.props.measurementsPerScale;
    const {filteredData} = this.props.filteredData;
    const { operators } = this.props.operators;

    return (
      <React.Fragment>
        <SearchForm
          handleFilters={this.handleFilters}
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

        <ScaleMeasurementsTable
          columns={columns}
          dataSource={filteredData}
        />

        <button className="btn-area" onClick={this.refetchData}>
          Нови данни
        </button>

        <ExportMeasurementPerScaleToExcel />

        <button className="btn-area" onClick={this.downloadPDF}>
          Сваляне на PDF файл
        </button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  measurementsPerScale: state.measurementsPerScale,
  operators: state.operators,
  filteredData: state.filteredData
});

export default connect(mapStateToProps, {
  getMeasurementsPerScale,
  getAllOperators,
  getFilteredData,
})(SearchBy);
