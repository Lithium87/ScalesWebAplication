import React from "react";
import { Table } from "antd";

const ScaleMeasurementsTable = (props) => {
  const columns = [
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
      onFilter: (filters) => props.handleFilters(filters, "material"),
    },
    {
      title: "??? ?? ????????",
      dataIndex: "operator_name",
      key: "operator_name",
      onFilter: (filters) => props.handleFilters(filters, "operator"),
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
      onFilter: (filters) => props.handleFilters(filters, "dates"),
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

  return <div></div>;
};

export default ScaleMeasurementsTable;
