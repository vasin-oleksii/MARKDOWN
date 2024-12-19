import { useState } from "react";
import ShowBoard from "./showBoard/ShowBoard";
import WriteBoard from "./writeBoard/WriteBoard";

const Board = () => {
  const [valueFromWriteBoard, setValueFromWriteBoard] = useState<string>("");

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
