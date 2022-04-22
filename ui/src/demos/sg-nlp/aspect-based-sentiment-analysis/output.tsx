import * as React from "react";
import { Highlight } from "../../../components/output/highlight/Highlight";

const colors = {
  "-1": "red",
  0: "blue",
  1: "green",
};

const sentimentLabelToDescMap = {
  "-1": "negative",
  0: "neutral",
  1: "positive",
};

const Output = (props: any) => {
  const {
    responseData,
    activeIds,
    activeDepths,
    selectedId,
    onMouseDown,
    onMouseOut,
    onMouseOver,
    onMouseUp,
  } = props;
  const { sentence, aspects, labels } = responseData;

  const HighlightedAspect = (
    color: string,
    index: any,
    label: string,
    value: string
  ) => {
    return (
      <Highlight
        style={{ width: "fit-content" }}
        activeDepths={activeDepths}
        activeIds={activeIds}
        color={color}
        depth={0}
        id={index}
        key={index}
        label={label}
        labelPosition={"top"}
        onMouseDown={onMouseDown}
        onMouseOut={onMouseOut}
        onMouseOver={onMouseOver}
        onMouseUp={onMouseUp}
        selectedId={selectedId}
      >
        {value}
      </Highlight>
    );
  };

  return (
    <>
      <h2>Aspect sentiment polarity</h2>
      <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
        {sentence.map((token: string, index: number) => {
          const aspect_found = (aspect_token: number[]) => aspect_token.includes(index);
          const aspectIndex = aspects.findIndex(aspect_found);
          if (aspectIndex !== -1) {
            const sentimentLabel = labels[aspectIndex];
            //@ts-ignore
            const color = colors[sentimentLabel];

            return HighlightedAspect(
              color,
              index,
              //@ts-ignore
              sentimentLabelToDescMap[sentimentLabel],
              token
            );
          }
          return (
            <span
              style={{
                marginRight: "3px",
                alignSelf: "flex-end",
                paddingBottom: "8px",
              }}
            >
              {token}{" "}
            </span>
          );
        })}
      </div>
    </>
  );
};

export default Output;
