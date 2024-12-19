interface BtnHeaderProps {
  children: string;
}
const BtnHeader = ({ children }: BtnHeaderProps) => {
  return <div className="text-primary">{children}</div>;
};

export default BtnHeader;
