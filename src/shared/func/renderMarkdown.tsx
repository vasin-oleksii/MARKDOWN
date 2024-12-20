import renderMarkdownHeaders from "./renderMarkdownHeaders";

const renderMarkdown = (text: string) => {
  return text.split("\n").map((line, index) => {
    if (line === "") return <br key={index} />;

    switch (line.split("")[0]) {
      case "#":
        return renderMarkdownHeaders(line, index);
      default:
        return <p key={index}>{line}</p>;
    }
  });
};

export default renderMarkdown;
