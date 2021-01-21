import React, { Component } from "react";
import ReactExport from "react-export-excel";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const dataSet = [
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

class ExportArchiveToExcel extends Component {
  render() {
    return (
      <ExcelFile
        element={
          <button className="btn-area btn-block">Експорт в Excel</button>
        }
      >
        <ExcelSheet data={dataSet} name="Архивни данни">
          <ExcelColumn label="Везна" value="scale_id" />
          <ExcelColumn label="Изделие №" value="grid_id" />
          <ExcelColumn label="Изделие име" value="grid_name" />
          <ExcelColumn label="Оператор" value="operator_name" />
          <ExcelColumn label="Време" value="measurement_time" />
          <ExcelColumn label="Дата" value="measurement_date" />
          <ExcelColumn label="Тегло [g]" value="weight" />
        </ExcelSheet>
      </ExcelFile>
    );
  }
}

export default ExportArchiveToExcel;
