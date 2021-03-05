import React from "react";
import { Table } from "antd";

const ScaleMeasurementsTable = (props) => {
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
      onFilter: (filters) => props.handleFilters(filters, "material"),
    },
    {
      title: "Име на оператор",
      dataIndex: "operator_name",
      key: "operator_name",
      onFilter: (filters) => props.handleFilters(filters, "operator"),
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
      onFilter: (filters) => props.handleFilters(filters, "dates"),
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

  return <div></div>;
};

export default ScaleMeasurementsTable;
