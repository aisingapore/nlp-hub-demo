import * as React from "react";
import styled from "styled-components";

const Indent = styled.div`
  margin-left: 12px;
`;

const Output = ({ responseData }: any) => {
  const text1Score = (
    <>
      Text 1: <b> {responseData["text1_score"].toFixed(2)}</b>
    </>
  );
  const text2Score = (
    <>
      Text 2: <b> {responseData["text2_score"].toFixed(2)}</b>
    </>
  );
  return (
    <div>
      {(() => {
        if (responseData["text1_score"] === responseData["text2_score"]) {
          return (
            <>
              Text 1 is rated to be equally coherent as Text 2. <br />
              <br />
              Scores: <br />
              <Indent>{text1Score}</Indent>
              <Indent>{text2Score}</Indent>
            </>
          );
        } else if (responseData["text1_score"] > responseData["text2_score"]) {
          return (
            <>
              Text 1 is rated to be more coherent than Text 2. <br />
              <br />
              Scores: <br />
              <Indent>{text1Score}</Indent>
              <Indent>{text2Score}</Indent>
            </>
          );
        } else {
          return (
            <>
              Text 2 is rated to be more coherent than Text 1. <br />
              <br />
              Scores: <br />
              <Indent>{text1Score}</Indent>
              <Indent>{text2Score}</Indent>
            </>
          );
        }
      })()}
    </div>
  );
};

export default Output;
