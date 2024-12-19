import { useState } from "react";

export type ThemeOptions = "dark" | "light" | "lgbt";

const themeNowFromLocalStorage =
  (localStorage.getItem("theme") as ThemeOptions) || "light";

const useTheme = () => {
  const [selectedTheme, setSelectedTheme] = useState<ThemeOptions>(
    themeNowFromLocalStorage
  );

  localStorage.setItem("theme", selectedTheme);
  document.body.className = selectedTheme;

  return { setSelectedTheme, selectedTheme };
};

export default useTheme;
