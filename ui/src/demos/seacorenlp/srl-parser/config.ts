import { DemoConfig } from "../../demos";
import { ModelConfig } from "../../models";

const models: ModelConfig[] = [
  {
    id: "id-indolembert",
    desc: "IndoLEM IndoBERT Base Embeddings + srl-bert (trained on SEACoreNLP SRL Dataset)",
    displayName: "Indonesian - SEACoreNLP",
  },
];

const config: DemoConfig = {
  taskId: "sea-srl-parser",
  title: "Semantic Role Labeling",
  desc: "Semantic Role Labeling is the task of identifying the latent predicate-argument structure of a sentence and providing representations that can answer basic questions about sentence meaning, such as who did what to whom etc.",
  models: models,
};

export default config;
