import * as React from "react";
import { DemoConfig } from "../../demos";
import { ModelConfig } from "../../models";

const models: ModelConfig[] = [
  {
    id: "dual-bert",
    desc: "This model is based on the Coupled Hierarchical Transformer architecture introduced in the accompanying paper. \
      The model assesses the first post and following replies contents of the entire conversation thread.",
    displayName: "Coupled Hierarchical Transformer",
    usage: {
      fromBackend: true,
    },
  },
];

const config: DemoConfig = {
  taskId: "rv-stance-detection",
  title: "Rumour Verification & Stance Classification",
  desc: 
      <>
        <b>The input</b> for both tasks is a thread that consists of a
        social-media-post with the source-claim and a sequence of reply-posts.<br/>
        <b>Rumour Detection</b> is the task of determining whether the source clain is
        a True Rumour, a False Rumour, or an Unverified Rumour. When the model
        is confident of the rumour's veracity, it will tag the post as a True
        Rumour or a False Rumour. Posts will be tagged as an Unverified Rumour
        when more information is required.<br/> <b>Stance Classification</b> is the task
        to annotate each of the reply posts with a stance label towards the
        source claim, namely: support, deny, query, and comment.
      </>,
  models: models,
};

export default config;
