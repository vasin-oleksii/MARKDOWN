import { useState } from "react";

export enum ThemeOptions {
  DARK = "dark",
  LIGHT = "light",
  LGBT = "lgbt",
}

const themeNowFromLocalStorage =
  (localStorage.getItem("theme") as ThemeOptions) || ThemeOptions.LIGHT;

const useTheme = () => {
  const [selectedTheme, setSelectedTheme] = useState<ThemeOptions>(
    themeNowFromLocalStorage
  );

  localStorage.setItem("theme", selectedTheme);
  document.body.className = selectedTheme;

  return { setSelectedTheme, selectedTheme };
};

export default useTheme;
