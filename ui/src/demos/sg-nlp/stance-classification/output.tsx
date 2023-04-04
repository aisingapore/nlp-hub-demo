import { Table } from "antd";
import * as React from "react";

import { BsArrowReturnRight } from "react-icons/bs";

interface OutputProps {
  responseData: {
    tweets: string[];
    preds: string[];
  };
}

interface ColoredStanceProps {
  stance: string;
}

const Indent: React.FC = ({ children }) => {
  return (
    <div>
      <BsArrowReturnRight style={{ marginRight: "10px" }} />
      {children}
    </div>
  );
};

const ColoredStance = ({ stance }: ColoredStanceProps) => {
  const colorMap: Record<string, string> = {
    DENY: "red",
    SUPPORT: "green",
    COMMENT: "blue",
    QUERY: "purple",
  };

  const color = colorMap[stance] || "black";

  return <div style={{ color: color, fontWeight: "bold" }}>{stance}</div>;
};

const Output = ({ responseData }: OutputProps) => {
  const comments = responseData.tweets.map((t, i) => {
    return {
      key: i,
      text: <Indent>{t}</Indent>,
      stance: <ColoredStance stance={responseData.preds[i]} />,
    };
  });

  const commentsColumns = [
    {
      title: <b>Tweet</b>,
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
      <Table
        dataSource={comments}
        columns={commentsColumns}
        pagination={false}
      />
    </div>
  );
};

export default Output;
