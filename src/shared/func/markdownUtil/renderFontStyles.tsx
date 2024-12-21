const renderFontStyles = (text: string, index: number) => {
  const match = text.match(/^(\*{1,3}).*(\*{1,3})$/);
  const lastStars = text.match(/\*+$/);

  if (match && lastStars) {
    const fontLevel =
      match[1].length === lastStars[0].length ? match[1].length : 0;

    switch (fontLevel) {
      case 0:
        return <p key={index}>{text}</p>;
      case 1:
        return <em key={index}>{text.slice(1, -1)} </em>;
      case 2:
        return <strong key={index}>{text.slice(2, -2)}</strong>;
      case 3:
        return (
          <strong key={index}>
            <em>{text.slice(3, -3)}</em>
          </strong>
        );
    }
  }
};

export default renderFontStyles;
