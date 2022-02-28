import { Table } from "antd";
import * as React from "react";

import { BsArrowReturnRight } from "react-icons/bs";

interface OutputProps {
  responseData: {
    text: string[];
    rumor_labels: string[];
    stance_labels: string[];
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
  const comments = responseData.text.slice(1).map((t, i) => {
    return {
      key: i,
      text: <Indent>{t}</Indent>,
      stance: responseData.stance_labels[i],
    };
  });

  const commentsColumns = [
    {
      title: <b>Comments/Replies</b>,
      dataIndex: "text",
      key: "text",
    },
    {
      title: <b>Stance</b>,
      dataIndex: "stance",
      key: "stance",
    },
  ];

  const claim = [
    {
      key: 0,
      claim: responseData.text[0],
    },
  ];

  const claimColumns = [
    {
      title: <b>Claim</b>,
      dataIndex: "claim",
      key: "claim",
    },
  ];

  return (
    <div>
      <Table dataSource={claim} columns={claimColumns} pagination={false} />
      <Table
        dataSource={comments}
        columns={commentsColumns}
        pagination={false}
      />

      <div style={{ paddingTop: "12px" }}>
        The model thinks that this conversation thread is a{" "}
        <b>{responseData.rumor_labels}</b>.
      </div>
    </div>
  );
};

export default Output;
