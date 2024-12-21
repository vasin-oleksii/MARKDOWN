import { useState } from "react";
import ShowBoard from "./showBoard/ShowBoard";
import WriteBoard from "./writeBoard/WriteBoard";

const Board = () => {
  const [valueFromWriteBoard, setValueFromWriteBoard] = useState<string>(`
# h1 title
## h2 title
### h3 title
#### h4 title
##### h5 title
###### h6 title

**Bold text**
*Italic text*
***Italic bold text***

> Blockquotes text
 -Not numbered list items
 -Not numbered list items
 -Not numbered list items
1. Numbered list items
2. Numbered list items
3. Numbered list items
 *Not numbered list items
 *Not numbered list items
 *Not numbered list items`);

  return (
    <div className="grid-cols-2 w-screen grid text-secondary h-full text-2xl">
      <WriteBoard
        value={valueFromWriteBoard}
        onChange={setValueFromWriteBoard}
      />
      <ShowBoard value={valueFromWriteBoard} />
    </div>
  );
};

export default Board;
