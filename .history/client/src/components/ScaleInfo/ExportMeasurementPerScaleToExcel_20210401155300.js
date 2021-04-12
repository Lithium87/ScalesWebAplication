import React, { Component } from "react";

import ReactExport from "react-export-excel";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const dataSet = [{
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
        key: "opeartor_name",
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

class ExportMeasurementPerScaleToExcel extends Component {
    render() {
        return ( <
            ExcelFile element = { < button className = "btn-area" > Експорт в Excel < /button>} >
                <
                ExcelSheet data = { dataSet }
                name = "Измервания за везна" >
                <
                ExcelColumn label = "Измерване №"
                value = "measurement_id" / >
                <
                ExcelColumn label = "Решетка №"
                value = "grid_id" / >
                <
                ExcelColumn label = "Решетка име"
                value = "grid_name" / >
                <
                ExcelColumn label = "Име на оператор"
                value = "operator_name" / >
                <
                ExcelColumn label = "Време"
                value = "measurement_time" / >
                <
                ExcelColumn label = "Дата"
                value = "measurement_date" / >
                <
                ExcelColumn label = "Плътност [g/cm3]"
                value = "density" / >
                <
                ExcelColumn label = "Смесител №"
                value = "mixer" / >
                <
                ExcelColumn label = "Бъркало"
                value = "byrkalo" / >
                <
                ExcelColumn label = "Пенетрация"
                value = "penetration" / >
                <
                /ExcelSheet> <
                /ExcelFile>
            );
        }
    }

    export default ExportMeasurementPerScaleToExcel;