import * as React from "react";

const Output = ({ responseData }: any) => {
  return (
    <div>
      {responseData["text1_score"] > responseData["text2_score"]
        ? "Text 1 is rated to be more coherent than Text 2."
        : "Text 2 is rated to be more coherent than Text 1."}
    </div>
  );
};

export default Output;
