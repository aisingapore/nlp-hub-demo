import * as React from "react";

const Output = ({ responseData }: any) => {
  return (
    <div>
      {responseData["text1_score"] > responseData["text2_score"] ? (
        <>
          Text 1 (score: <b>{responseData["text1_score"].toFixed(2)}</b>) is
          rated to be more coherent than Text 2 (score:{" "}
          <b>{responseData["text2_score"].toFixed(2)}</b>).
        </>
      ) : (
        <>
          Text 2 (score: <b>{responseData["text2_score"].toFixed(2)}</b>) is
          rated to be more coherent than Text 1 (score:{" "}
          <b>{responseData["text1_score"].toFixed(2)}</b>).
        </>
      )}
    </div>
  );
};

export default Output;
