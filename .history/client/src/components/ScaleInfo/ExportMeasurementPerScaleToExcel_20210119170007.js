import React, { Component } from "react";
import ReactExport from "react-export-excel";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const dataSet = [
  {
    title: "????????? ?",
    dataIndex: "measurement_id",
    key: "measurement_id",
  },
  {
    title: "??????? ?",
    dataIndex: "grid_id",
    key: "grid_id",
  },
  {
    title: "??????? ???",
    dataIndex: "grid_name",
    key: "grid_name",
  },
  {
    title: "??? ?? ????????",
    dataIndex: "operator_name",
    key: "opeartor_name",
  },
  {
    title: "?????",
    dataIndex: "measurement_time",
    key: "measurement_time",
  },
  {
    title: "????",
    dataIndex: "measurement_date",
    key: "measurement_date",
  },
  {
    title: "???????? [g/cm3]",
    dataIndex: "density",
    key: "density",
  },
  {
    title: "???????? ?",
    dataIndex: "mixer",
    key: "mixer",
  },
  {
    title: "???????",
    dataIndex: "byrkalo",
    key: "byrkalo",
  },
  {
    title: "??????????",
    dataIndex: "penetration",
    key: "penetration",
  },
];

class ExportMeasurementPerScaleToExcel extends Component {
  render() {
    return (
      <ExcelFile
        element={<button className="btn-area">??????? ? Excel</button>}
      >
        <ExcelSheet data={dataSet} name="?????????? ?? ???????">
          <ExcelColumn label="????????? ?" value="measurement_id" />
          <ExcelColumn label="??????? ?" value="grid_id" />
          <ExcelColumn label="??????? ???" value="grid_name" />
          <ExcelColumn label="??? ?? ????????" value="operator_name" />
          <ExcelColumn label="?????" value="measurement_time" />
          <ExcelColumn label="????" value="measurement_date" />
          <ExcelColumn label="???????? [g/cm3]" value="density" />
          <ExcelColumn label="???????? ?" value="mixer" />
          <ExcelColumn label="???????" value="byrkalo" />
          <ExcelColumn label="??????????" value="penetration" />
        </ExcelSheet>
      </ExcelFile>
    );
  }
}

export default ExportMeasurementPerScaleToExcel;
