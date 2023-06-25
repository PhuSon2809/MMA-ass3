import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

// SETUP COLORS
const GREY = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
};

const MAIN = {
  lighter: "#eaf8f3",
  light: "#e4f2e6",
  main: "#347357",
  dark: "#103996",
  darker: "#061B64",
  contrastText: "#fff",
};

const PRIMARY = {
  lighter: "#D1E9FC",
  light: "#76B0F1",
  main: "#2065D1",
  dark: "#103996",
  darker: "#061B64",
  contrastText: "#fff",
};

const SECONDARY = {
  lighter: "#D6E4FF",
  light: "#84A9FF",
  main: "#3366FF",
  dark: "#1939B7",
  darker: "#091A7A",
  contrastText: "#fff",
};

const INFO = {
  lighter: "#D0F2FF",
  light: "#74CAFF",
  main: "#1890FF",
  dark: "#0C53B7",
  darker: "#04297A",
  contrastText: "#fff",
};

const SUCCESS = {
  lighter: "#E9FCD4",
  light: "#AAF27F",
  main: "#54D62C",
  dark: "#229A16",
  darker: "#08660D",
  contrastText: GREY[800],
};

const WARNING = {
  lighter: "#FFF7CD",
  light: "#FFE16A",
  main: "#FFC107",
  dark: "#B78103",
  darker: "#7A4F01",
  contrastText: GREY[800],
};

const ERROR = {
  lighter: "#FFE7D9",
  light: "#FFA48D",
  main: "#FF4842",
  dark: "#B72136",
  darker: "#7A0C2E",
  contrastText: "#fff",
};

const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 26,
  h3: 22,
  h4: 16,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,

  // app dimensions
  width,
  height,
};

const palette = {
  common: { black: "#000", white: "#fff" },
  main: MAIN,
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  sizes: SIZES,
  text: {
    primary: GREY[800],
    secondary: GREY[600],
    disabled: GREY[500],
  },
  background: {
    paper: "#fff",
    default: GREY[100],
    neutral: GREY[200],
  },
  action: {
    active: GREY[600],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export default palette;
