import InputField from "../../../components/input/InputField";
import TextInput from "../../../components/input/TextInput";
import Tokens from "../../../components/input/Tokens";

const inputFields: InputField[] = [
  {
    id: "aspects",
    component: Tokens,
    componentProps: { label: "Aspects" },
  },
  {
    id: "sentence",
    component: TextInput,
    componentProps: { label: "Sentence", minRows: 1, maxRows: 3 },
  },
];

export const validateInputs = (inputFields: Record<string, any>) => {
  const errors: { [index: string]: string } = {};

  const aspects = inputFields["aspects"];
  const sentence = inputFields["sentence"];

  aspects.map((aspect: string) => {
    if (aspect.split(" ").length > 1) {
      errors["aspects"] =
        "Currently this demo only supports single-word aspects. " +
        "Using the model from the python package allows multiple-word aspects.";
    }
  })

  const missingAspects = aspects
    .map((aspect: string) => {
      if (!sentence.includes(aspect)) {
        return aspect;
      }
    })
    .filter((missingAspect: string) => missingAspect !== undefined);

  if (missingAspects.length > 0) {
    errors["aspects"] =
      missingAspects.join(",") +
      " cannot be found in the sentence. Please only use aspects that can be found in the sentence.";
  }

  return errors;
};

export default inputFields;
