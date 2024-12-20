import React from "react";

const renderMarkdownHeaders = (line: string, index: number) => {
  const match = line.match(/^(#{1,6})/);
  console.log(match);
  if (match) {
    const headerLevel = match[0].length;
    console.log(headerLevel);
    return React.createElement(
      `h${headerLevel}`,
      { key: index },
      line.slice(headerLevel)
    );
  }
};

export default renderMarkdownHeaders;
