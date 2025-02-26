import { useState, useEffect } from "react";

// Custom Hook
function useThemeStatus(key) {
  const [theme, setTheme] = useState(key);

  useEffect(() => {
    function handleLight() {
      setTheme(true);
    }
    function handleDark() {
      setTheme(false);
    }
    window.addEventListener("light", handleLight);
    window.addEventListener("dark", handleDark);

    return () => {
      window.removeEventListener("light", handleLight);
      window.removeEventListener("dark", handleDark);
    };
  }, []);

  return theme;
}

// Komponen GantiTema
export function GantiTema() {
  const isTheme = useThemeStatus(true);

  function handleSaveClick() {
    const newTheme = !isTheme;
    window.dispatchEvent(new CustomEvent(newTheme ? "light" : "dark"));
    console.log("Tema Sekarang " + (newTheme ? "Light" : "Dark"));
  }

  return (
    <div>
      <button onClick={handleSaveClick}>
        {isTheme ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
}
