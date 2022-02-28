import InputField from "../../../components/input/InputField";
import TableInput, {
  TableInputProps,
} from "../../../components/input/TableInput";

const claimInputProps: TableInputProps = {
  label: "Discussion thread",
  columnInfo: [{ title: "Claim", dataIndex: "claim" }],
  maxRows: 1,
};

const commentInputProps: TableInputProps = {
  columnInfo: [{ title: "Comments/Replies", dataIndex: "comment" }],
  maxRows: 10,
};

const inputFields: InputField[] = [
  {
    id: "claims",
    component: TableInput,
    componentProps: claimInputProps,
  },
  {
    id: "comments",
    component: TableInput,
    componentProps: commentInputProps,
  },
];

export const formatPayload = (inputFields: Record<string, any>) => {
  const claims = inputFields.claims.map(
    (row: { key: number; claim: string }) => {
      return row.claim;
    }
  );
  const comments = inputFields.comments.map(
    (row: { key: number; comment: string }) => {
      return row.comment;
    }
  );

  return { posts: claims.concat(comments) };
};

export default inputFields;
