import { Table } from "antd";
import * as React from "react";

import { BsArrowReturnRight } from "react-icons/bs";

interface OutputProps {
  responseData: {
    text: string[];
    rumor_label: string;
    stance_label: string[];
  };
}

const Indent: React.FC = ({ children }) => {
  return (
    <div>
      <BsArrowReturnRight style={{ marginRight: "10px" }} />
      {children}
    </div>
  );
};

const Output = ({ responseData }: OutputProps) => {
  const dataSource = responseData.text.map((t, i) => {
    return {
      key: i,
      text: i > 0 ? <Indent>{t}</Indent> : t,
      stance: i > 0 ? responseData.stance_label[i - 1] : "",
    };
  });
  const columns = [
    {
      title: <b>Text</b>,
      dataIndex: "text",
      key: "text",
    },
    {
      title: <b>Stance</b>,
      dataIndex: "stance",
      key: "stance",
    },
  ];

  return (
    <div>
      <Table dataSource={dataSource} columns={columns} pagination={false} />

      <div style={{ paddingTop: "12px" }}>
        The model thinks that this conversation thread is a{" "}
        <b>{responseData.rumor_label}</b>.
      </div>
    </div>
  );
};

export default Output;
