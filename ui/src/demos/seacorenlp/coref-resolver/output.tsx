import * as React from "react";
import NestedHighlight, {
  withHighlightClickHandling,
} from "../../../components/output/highlight/NestedHighlight";

const output = (OutputProps: any) => {
  const {
    responseData,
    activeIds,
    activeDepths,
    isClicking,
    selectedId,
    onMouseDown,
    onMouseOut,
    onMouseOver,
    onMouseUp,
  } = OutputProps;
  const { document, clusters } = responseData;

  return (
    <div>
      <NestedHighlight
        activeDepths={activeDepths}
        activeIds={activeIds}
        clusters={clusters}
        tokens={document}
        isClickable
        isClicking={isClicking}
        labelPosition="left"
        onMouseDown={onMouseDown}
        onMouseOut={onMouseOut}
        onMouseOver={onMouseOver}
        onMouseUp={onMouseUp}
        selectedId={selectedId}
      />
    </div>
  );
};

const Output = withHighlightClickHandling(output);

export default Output;
