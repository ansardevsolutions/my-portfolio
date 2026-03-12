import { createTheme, alpha } from "@mui/material";

// Figma "Elias" UI Theme Palette
const ELIAS_PALETTE = {
  primary: {
    main: "#C778DD", // Distinctive Purple Accent
    light: "#D898E9",
    dark: "#A656B6",
    contrastText: "#282C33",
  },
  secondary: {
    main: "#ABB2BF", // Gray/Slate used for text and borders
    light: "#C1C8D5",
    dark: "#8C92A0",
    contrastText: "#282C33",
  },
  background: {
    default: "#282C33", // Main Editor Background
    paper: "#282C33",
  },
  text: {
    primary: "#FFFFFF",
    secondary: "#ABB2BF", // Muted text
  },
  divider: "#ABB2BF", // Gray lines for boxes and sections
  error: {
    main: "#E06C75",
  },
  warning: {
    main: "#E5C07B",
  },
  info: {
    main: "#56B6C2",
  },
  success: {
    main: "#98C379",
  },
};

const typography = {
  fontFamily: '"Fira Code", "Courier New", monospace', // The developer monospace aesthetic
  h1: {
    fontWeight: 600,
    fontSize: "2.5rem",
    letterSpacing: "-0.5px",
  },
  h2: {
    fontWeight: 500,
    fontSize: "2rem",
    letterSpacing: "0px",
  },
  h3: {
    fontWeight: 500,
    fontSize: "1.75rem",
  },
  h4: {
    fontWeight: 500,
    fontSize: "1.5rem",
  },
  h5: {
    fontWeight: 500,
    fontSize: "1.25rem",
  },
  h6: {
    fontWeight: 500,
    fontSize: "1rem",
  },
  body1: {
    fontSize: "1rem",
    lineHeight: 1.6,
  },
  body2: {
    fontSize: "0.875rem",
    lineHeight: 1.6,
  },
  button: {
    textTransform: "none",
    fontWeight: 500,
  },
};

const components = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 0, // Sharp corners instead of rounded
        textTransform: "none",
        fontWeight: 500,
        padding: "8px 16px",
      },
      containedPrimary: {
        border: `1px solid #C778DD`,
        backgroundColor: "transparent",
        color: "#FFFFFF",
        "&:hover": {
          backgroundColor: alpha("#C778DD", 0.1),
        },
      },
      outlinedPrimary: {
        border: `1px solid #C778DD`,
        color: "#FFFFFF",
        "&:hover": {
          backgroundColor: alpha("#C778DD", 0.1),
          border: `1px solid #C778DD`,
        },
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 0,
        backgroundColor: "transparent",
        border: `1px solid #ABB2BF`,
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        backgroundImage: "none",
      },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        backgroundColor: "#282C33",
        backgroundImage: "none",
        boxShadow: "none",
      },
    },
  },
  MuiContainer: {
    styleOverrides: {
      root: {
        paddingLeft: "24px",
        paddingRight: "24px",
        "@media (min-width: 600px)": {
          paddingLeft: "5%",
          paddingRight: "5%",
        },
      },
    },
  },
  MuiCssBaseline: {
    styleOverrides: `
      ::selection {
        background-color: rgba(199, 120, 221, 0.3);
        color: #ffffff;
      }
      ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }
      ::-webkit-scrollbar-track {
        background: #282C33;
      }
      ::-webkit-scrollbar-thumb {
        background: #ABB2BF;
        border-radius: 4px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #C778DD;
      }
      body {
        background-color: #282C33;
        color: #ABB2BF;
      }
    `,
  },
};

export const createAppTheme = (mode) => {
  return createTheme({
    palette: {
      mode: "dark", // Enforcing dark mode for Figma Elias Theme
      ...ELIAS_PALETTE,
    },
    typography,
    components,
    shape: {
      borderRadius: 0, // Enforcing sharp corners globally
    },
  });
};