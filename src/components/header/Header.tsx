import BtnHeader from "../buttons/BtnHeader";
import SelectTheme from "./SelectTheme";

const Header = () => {
  return (
    <nav className="flex gap-4 items-center">
      <BtnHeader>File</BtnHeader>
      <BtnHeader>Formatting</BtnHeader>
      <SelectTheme />
    </nav>
  );
};

export default Header;
