import * as React from "react";
import Title from "antd/lib/typography/Title";
import { Collapse } from "antd";

import Pane from "../components/Pane";

const { Panel } = Collapse;

const content = [
  {
    header: "Fork the SGnlp repository",
    text: (
      <>
        First, make a fork of the{" "}
        <a
          href="https://github.com/aimakerspace/sgnlp"
          target="_blank"
          rel="noopener"
        >
          SGnlp repository
        </a>
        . Clone the forked repository and install the package dependencies in
        `requirements.txt` into your virtual environment.
      </>
    ),
  },
  {
    header: "Organize the project codebase",
    text: (
      <>
        <p>
          Next, create a folder under the `sgnlp/models/` folder and split your
          codebase into the following files:
        </p>
        <ol>
          <li>
            `config.py` - script containing a HuggingFace's `PretrainedConfig`
            class.
          </li>
          <li>
            `modeling.py` - script containing a HuggingFace's `PretrainedModel`
            class.
          </li>
          <li>
            `preprocess.py` - script containing a data preprocessing pipeline
            which converts raw text into input tensors for the model.
          </li>
          <li>`train.py` - script containing code to train the model.</li>
          <li>`eval.py` - script containing code to evaluate the model.</li>
          <li>
            `postprocess.py` - optional script containing code to post-process
            the model output.
          </li>
          <li>
            `tokenization.py` - optional script containing a HuggingFace's
            `PretrainedTokenizer` class.
          </li>
        </ol>
      </>
    ),
  },
];

const ContributingGuide = () => {
  return (
    <Pane>
      <Title>Contributing Guide</Title>

      <Collapse>
        {content.map((content, i) => {
          const numberedHeader = i + 1 + ". " + content.header;

          return (
            <Panel header={numberedHeader} key={i}>
              {content.text}
            </Panel>
          );
        })}
      </Collapse>
    </Pane>
  );
};

export default ContributingGuide;
