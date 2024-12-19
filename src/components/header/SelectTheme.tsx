import useTheme, { ThemeOptions } from "../../shared/hooks/useTheme";

const SelectTheme = () => {
  const { setSelectedTheme, selectedTheme } = useTheme();

  return (
    <label className="text-primary" htmlFor="theme">
      Theme
      <select
        name="theme"
        id="theme"
        onChange={(e) => setSelectedTheme(e.target.value as ThemeOptions)}
        defaultValue={selectedTheme}
      >
        <option value="light">Light 🤍</option>
        <option value="dark">Dark 🖤</option>
        <option value="lgbt">Lgbt 🏳️‍🌈</option>
      </select>
    </label>
  );
};

export default SelectTheme;
