import * as React from "react";
import { DemoConfig } from "../../demos";
import { ModelConfig } from "../../models";

const models: ModelConfig[] = [
  {
    id: "stance-classification",
    desc: "BERT-based Hierarchical Transformer with model design in the input and output layers specific to stance classification.",
    displayName: "Stance Classification",
  },
];

const config: DemoConfig = {
  taskId: "stance-classification",
  title: "Stance Classification",
  desc:
    <div>
      Stance classification labels each post in the thread with a stance label (Support, Deny, Query, Comment) towards the claim in the source post.
    </div>,
  models: models,
};

export default config;
