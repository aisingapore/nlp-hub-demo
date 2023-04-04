import { Table } from "antd";
import * as React from "react";

const Output = ({ responseData }: any) => {

  return (
    <div>
      <div>
        The model thinks that the original tweet is a {responseData.pred} rumour.
      </div>
    </div>
  );
};

export default Output;
