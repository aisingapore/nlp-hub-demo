import * as React from "react";
import { DemoConfig } from "../../demos";
import { ModelConfig } from "../../models";

const models: ModelConfig[] = [
  {
    id: "coherence-momentum",
    desc: (
      <>
        This is a neural network model that makes use of a momentum encoder and
        hard negative mining during training. This model is able to take in a
        piece of text and output a coherence score. The coherence score is only
        meant for comparison, i.e. it is only meaningful when used to compare
        between two texts, and the text with the higher coherence score is
        deemed to be more coherent by the model.
      </>
    ),
    displayName: "Coherence Momentum",
    usage: {
      fromBackend: true,
    },
  },
];

const config: DemoConfig = {
  taskId: "coherence-modeling",
  title: "Coherence Modeling",
  desc: (
    <div>
      Coherence is a measure of how well a piece of text fits together. A
      coherent list of sentences should follow naturally from previous ones
      while an incoherent list of sentences might seem to be randomly put
      together. Traditional metrics such as BLEU and ROUGE are unable to give a
      robust measure of coherence. Given the rapid advancements in neural
      methods, coherence models have become a viable alternative approach to
      evaluating the coherence of a text.
    </div>
  ),
  models: models,
};

export default config;
