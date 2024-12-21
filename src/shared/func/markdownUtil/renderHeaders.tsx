import React from "react";

const renderHeaders = (line: string, index: number) => {
  const match = line.match(/^(#{1,6})/);
  if (match) {
    const headerLevel = match[0].length;

    return React.createElement(
      `h${headerLevel}`,
      { key: index },
      line.slice(headerLevel)
    );
  }
};

export default renderHeaders;
