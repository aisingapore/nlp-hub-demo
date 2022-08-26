import { DemoConfig } from "../../demos";
import { ModelConfig } from "../../models";

const models: ModelConfig[] = [
  {
    id: "id-xlmr",
    desc: "XLM-RoBERTa Base Embeddings + c2f-coref architecture (Trained on COIN dataset)",
    displayName: "Indonesian - SEACoreNLP",
  },
];

const config: DemoConfig = {
  taskId: "sea-coref-resolver",
  title: "Coreference Resolution",
  desc: "Coreference resolution is the task of finding all expressions that refer to the same entity in a text.",
  models: models,
};

export default config;
