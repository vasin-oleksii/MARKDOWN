import BtnHeader from "../buttons/BtnHeader";
import SelectTheme from "./SelectTheme";

const Header = () => {
  return (
    <div>
      <BtnHeader>File</BtnHeader>
      <BtnHeader>Formatting</BtnHeader>
      <SelectTheme />
    </div>
  );
};

export default Header;
