import renderMarkdownHeaders from "./renderMarkdownHeaders";

const renderMarkdown = (text: string) => {
  return text.split("\n").map((line, index) => {
    if (line === "") return <br key={index} />;

    if (line.match(/^(#{1,6}) /)) {
      return renderMarkdownHeaders(line, index);
    }
    return <p key={index}>{line}</p>;
  });
};

export default renderMarkdown;
