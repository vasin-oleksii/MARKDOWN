import renderMarkdown from "../../../../shared/func/renderMarkdown";

const ShowBoard = ({ value }: { value: string }) => {
  return <div>{renderMarkdown(value)}</div>;
};

export default ShowBoard;
