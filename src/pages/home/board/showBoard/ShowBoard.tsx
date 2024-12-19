import renderMarkdown from "../../../../shared/func/renderMarkdown";

const ShowBoard = ({ value }: { value: string }) => {
  console.log(renderMarkdown(value));
  return <div>{renderMarkdown(value)}</div>;
};

export default ShowBoard;
