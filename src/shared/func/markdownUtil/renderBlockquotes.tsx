const renderBlockquotes = (text: string, index: number) => {
  return (
    <div
      className="p-2 bg-cta border-l-4 border-cta-text text-cta-text"
      key={index}
    >
      <blockquote>{text.slice(2)}</blockquote>
    </div>
  );
};

export default renderBlockquotes;
