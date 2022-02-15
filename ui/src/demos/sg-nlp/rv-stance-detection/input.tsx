import InputField from "../../../components/input/InputField";
import TableInput, {
  TableInputProps,
} from "../../../components/input/TableInput";

const tableInputProps: TableInputProps = {
  label: "Discussion thread",
  columnInfo: [{ title: "Post", dataIndex: "post" }],
  maxRows: 10,
};

const inputFields: InputField[] = [
  {
    id: "posts",
    component: TableInput,
    componentProps: tableInputProps,
  },
];

export const formatPayload = (inputFields: Record<string, any>) => {
  let posts = inputFields.posts.map((row: { key: number; post: string }) => {
    return row.post;
  });

  return { posts: posts };
};

export default inputFields;
