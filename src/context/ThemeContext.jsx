// context/ThemeContext.js - Enhanced Version
import { createContext, useContext, useMemo, useState, useEffect } from "react";
import { ThemeProvider, CssBaseline, useMediaQuery } from "@mui/material";
import { createAppTheme } from "../theme/theme";

const ThemeContext = createContext({
  mode: "light",
  toggleTheme: () => {},
  isDarkMode: false,
  prefersDarkMode: false,
});

export function CustomThemeProvider({ children }) {
  // 1. Check user's system preference
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  // 2. Initialize with system preference OR saved preference
  const [mode, setMode] = useState(() => {
    // Check localStorage first
    const savedMode = localStorage.getItem("theme-mode");
    if (savedMode === "light" || savedMode === "dark") {
      return savedMode;
    }
    // Fallback to system preference
    return prefersDarkMode ? "dark" : "light";
  });

  // 3. Toggle function with persistence
  const toggleTheme = () => {
    setMode((prev) => {
      const newMode = prev === "light" ? "dark" : "light";
      // Save to localStorage
      localStorage.setItem("theme-mode", newMode);
      return newMode;
    });
  };

  // 4. Memoized theme with performance optimization
  const theme = useMemo(() => createAppTheme(mode), [mode]);

  // 5. Helper computed value
  const isDarkMode = mode === "dark";

  // 6. Sync with system preference changes (optional)
  useEffect(() => {
    // Only auto-switch if user hasn't explicitly set a preference
    const savedMode = localStorage.getItem("theme-mode");
    if (!savedMode && prefersDarkMode !== isDarkMode) {
      setMode(prefersDarkMode ? "dark" : "light");
    }
  }, [prefersDarkMode, isDarkMode]);

  // 7. Update CSS variables for custom styling
  useEffect(() => {
    // Set CSS custom properties for theme colors
    const root = document.documentElement;
    root.style.setProperty("--primary-main", theme.palette.primary.main);
    root.style.setProperty("--primary-light", theme.palette.primary.light);
    root.style.setProperty("--primary-dark", theme.palette.primary.dark);
    root.style.setProperty("--text-primary", theme.palette.text.primary);

    // For Minimal UI dot indicator styling
    root.style.setProperty(
      "--nav-indicator-color",
      isDarkMode ? theme.palette.primary.light : theme.palette.primary.main
    );
  }, [theme, isDarkMode]);

  // 8. Prevent flash of incorrect theme (FOUC)
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // 9. Context value
  const contextValue = useMemo(
    () => ({
      mode,
      toggleTheme,
      isDarkMode,
      prefersDarkMode,
      theme, // Include full theme object if needed elsewhere
    }),
    [mode, toggleTheme, isDarkMode, prefersDarkMode, theme]
  );

  // 10. Prevent hydration mismatch
  if (!mounted) {
    return null; // Or a loading skeleton
  }

  return (
    <ThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useThemeMode() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useThemeMode must be used within a CustomThemeProvider");
  }
  return context;
}

// Optional: Custom hook for theme-aware styling
export function useThemeColors() {
  const theme = useContext(ThemeContext).theme;
  return useMemo(
    () => ({
      primary: theme.palette.primary,
      text: theme.palette.text,
      background: theme.palette.background,
      getContrastColor: (color) =>
        theme.palette.getContrastText(color || theme.palette.background.paper),
    }),
    [theme]
  );
}
