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
  {
    header: "Implement HuggingFace config/model/tokenizer interface",
    text: (
      <>
        Next, inherit the HuggingFace's `PretrainedConfig`, `PretrainedModel`,
        and `PretrainedTokenizer` class to your model configuration class, model
        class, and your tokenizer class respectively. For more information,
        please refer to the{" "}
        <a
          href="https://huggingface.co/docs/transformers/add_new_model#overview-of-models"
          target="_blank"
          rel="noopener"
        >
          HuggingFace's documentation.
        </a>
      </>
    ),
  },
  {
    header: "Train and save model weights",
    text: (
      <>
        Next, start training your model and/or tokenizer with the refactored
        code and save the model weights and/or tokenizer files via HuggingFace's
        `save_pretrained` method.
      </>
    ),
  },
  {
    header: "Unit testing",
    text: (
      <>
        A good project codebase should always be covered by unit tests. At a
        minimum, we recommend contributors include unit tests for all their
        classes and functions including tests to ensure the train loop is
        working properly. Simply create a folder for your project under the
        `tests` folder and store all your unit test files there.
      </>
    ),
  },
  {
    header: "Documentation",
    text: (
      <>
        <p>
          Another property of a good project is documentation. At a minimum, we
          recommend contributors include a README.md file in their project
          folder to provide information with regards to the model as well as for
          instructions on how to train, evaluate and run inferences with the
          model.
        </p>
        <p>
          Optionally, we also recommend contributors provide advanced
          documentation in the form of Sphinx Document format for their project
          in the `sgnlp/docs/model/` folder. Simply create a .rst file and start
          documenting away!
        </p>
      </>
    ),
  },
  {
    header: "Implement a demo API backend (Optional)",
    text: (
      <>
        Optionally, we recommend contributors also implement a{" "}
        <a
          href="https://palletsprojects.com/p/flask/"
          target="_blank"
          rel="noopener"
        >
          Flask
        </a>{" "}
        API backend to run batch inferences against their pretrained models. To
        contribute, create a project folder under the `demo_api` folder and add
        at a minimum, an `api.py` script which contains the Flask API
        implementation, a `requirements.txt` file, a `usage.py` script showing
        the code to load the pretrained weights and perform a batch inference
        and a `model_card` folder with a JSON file containing information about
        the model.
      </>
    ),
  },
  {
    header: "Implement a demo frontend (Optional)",
    text: (
      <>
        Contributors with frontend experience who would like to have their model
        featured on the SGnlp demo webpage, can consider contributing to the{" "}
        <a
          href="https://github.com/aimakerspace/nlp-hub-demo"
          target="_blank"
          rel="noopener"
        >
          `nlp-hub-demo`
        </a>{" "}
        project. The demo project is written in TypeScript and uses the React
        framework.
      </>
    ),
  },
  {
    header: "Submit a pull request",
    text: (
      <>
        Finally, submit a pull request of your project code to the SGnlp
        repository `dev` branch. (Do include a link to the pretrained weights
        and/or tokenizer files from step 4 in your pull request) Engineers
        supporting the SGnlp project will perform a code review and provide
        feedback (if any). Once the project code is reviewed with all feedback
        concluded, it will be merged to the `dev` branch and released publicly
        in the next major release!
      </>
    ),
  },
  {
    header: "Need more support?",
    text: (
      <>
        For a more detailed guide on how to contribute, please refer to{" "}
        <a
          href="https://github.com/aimakerspace/sgnlp/blob/main/CONTRIBUTING.md"
          target="_blank"
          rel="noopener"
        >
          this
        </a>
        . For all inquiries, please email us at sg-nlp@aisingapore.org or post a
        discussion at our{" "}
        <a
          href="https://community.aisingapore.org/groups/natural-language-processing/forum/natural-language-processing/"
          target="_blank"
          rel="noopener"
        >
          discussion forum
        </a>
        .
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
