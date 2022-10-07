import * as React from "react";

const Output = ({ responseData }: any) => {
  return (
    <div>
      {(() => {
        if (responseData["text1_score"] === responseData["text2_score"]) {
          return (
            <>
              Text 1 (score: <b>{responseData["text1_score"].toFixed(2)}</b>) is
              rated to be equally coherent as Text 2 (score:{" "}
              <b>{responseData["text2_score"].toFixed(2)}</b>).
            </>
          );
        } else if (responseData["text1_score"] > responseData["text2_score"]) {
          return (
            <>
              Text 1 (score: <b>{responseData["text1_score"].toFixed(2)}</b>) is
              rated to be more coherent than Text 2 (score:{" "}
              <b>{responseData["text2_score"].toFixed(2)}</b>).
            </>
          );
        } else {
          return (
            <>
              Text 2 (score: <b>{responseData["text2_score"].toFixed(2)}</b>) is
              rated to be more coherent than Text 1 (score:{" "}
              <b>{responseData["text1_score"].toFixed(2)}</b>).
            </>
          );
        }
      })()}
    </div>
  );
};

export default Output;
