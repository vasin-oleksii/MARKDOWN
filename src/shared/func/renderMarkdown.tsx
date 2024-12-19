const renderMarkdown = (text: string) => {
  const separateSymbol = "⠀";

  return text.split("").map((line, i) => {
    if (line.includes(separateSymbol)) {
      return (
        <p>
          <br key={i} />
        </p>
      );
    }

    return line;
  });
};

export default renderMarkdown;
