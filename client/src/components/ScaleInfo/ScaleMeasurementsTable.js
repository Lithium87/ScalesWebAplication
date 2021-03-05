import React from "react";
import { Table } from "antd";

const ScaleMeasurementsTable = (props) => {
  return (
    <div className="table_wrapper">
      <Table columns={props.columns} dataSource={props.dataSource} />
    </div>
  );
};

export default ScaleMeasurementsTable;
