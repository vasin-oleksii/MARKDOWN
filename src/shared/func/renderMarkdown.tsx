import renderBlockquotes from "./markdownUtil/renderBlockquotes";
import renderFontStyles from "./markdownUtil/renderFontStyles";
import renderHeaders from "./markdownUtil/renderHeaders";

const renderMarkdown = (text: string) => {
  return text.split("\n").map((line, index) => {
    if (line === "") return <br key={index} />;

    if (line.match(/^(#{1,6})\s/)) {
      return renderHeaders(line, index);
    }
    if (line.match(/^(\*{1,3}).*(\*{1,3})$/)) {
      return renderFontStyles(line, index);
    }
    if (line.match(/^\>\s/)) {
      return renderBlockquotes(line, index);
    }
    return <p key={index}>{line}</p>;
  });
};

export default renderMarkdown;
