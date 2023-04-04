import * as React from "react";
import { DemoConfig } from "../../demos";
import { ModelConfig } from "../../models";

const models: ModelConfig[] = [
  {
    id: "rumour-verification",
    desc: "BERT-based Hierarchical Transformer for rumour verification.",
    displayName: "Rumour Verification",
  },
];

const config: DemoConfig = {
  taskId: "rumour-verification",
  title: "Rumour Verification",
  desc:
    <div>
      Rumour verification tags source claim in the thread with a rumour label (True, False, Unverified).
    </div>,
  models: models,
};

export default config;
