import InputField from "../../../components/input/InputField";
import TextInput from "../../../components/input/TextInput";

const inputFields: InputField[] = [
  {
    id: "text1",
    component: TextInput,
    componentProps: { label: "Text 1", minRows: 3, maxRows: 8 },
  },
  {
    id: "text2",
    component: TextInput,
    componentProps: { label: "Text 2", minRows: 3, maxRows: 8 },
  },
];

export default inputFields;
