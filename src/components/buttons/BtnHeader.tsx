interface BtnHeaderProps {
  children: string;
}
const BtnHeader = ({ children }: BtnHeaderProps) => {
  return (
    <a href="#" className="text-primary p-2 px-4">
      {children}
    </a>
  );
};

export default BtnHeader;
