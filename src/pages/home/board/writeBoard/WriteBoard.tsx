interface WriteBoardProps {
  value: string;
  onChange: (value: string) => void;
}

const WriteBoard = ({ value, onChange }: WriteBoardProps) => {
  return (
    <textarea
      name="markdown"
      id="markdown"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="resize-none m-2 bg-card max-w-full max-h-full px-2 py-1 rounded-md "
      placeholder="# Hello World"
    />
  );
};

export default WriteBoard;
